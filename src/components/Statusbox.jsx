import React, { useState } from 'react';
import Passengerdetailbox from './Passengerdetailbox';

const Statusbox = () => {
    const [responseData, setResponseData] = useState([]);

    const [pnrvalue, setPnrValue] = useState("");

    const handleInputChange = (e) => {
        setPnrValue(e.target.value)
    }

    const handleButtonClick = async () => {

        console.log(pnrvalue);
        const url = 'https://railsinfo-services.makemytrip.com/api/rails/pnr/currentstatus/v1';

        const payload = {
            pnrID: `${pnrvalue}`,
            trackingParams: {
                affiliateCode: 'MMT001',
                channelCode: 'PWA'
            }
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            setResponseData(data.PassengerDetails.PassengerStatus);
            console.log('Response:', data.PassengerDetails.PassengerStatus);
        } catch (error) {
            alert("You have entered wrong PNR, Retry!")
        }
    };

    return (
        <div className="bg-gradient-to-l from-purple-950 to-black flex flex-col w-screen min-h-screen">
            <h1 className='text-center text-white font-sans text-2xl mb-2'>Check PNR Status</h1>
            <div className='flex justify-center h-[200px] mt-2'>
                <div className="card w-96 bg-base-100 shadow-xl h-[190px]">
                    <div className="card-body w-full flex flex-col">
                        <h2 className="card-title">
                            Please enter the PNR number
                        </h2>
                        <div>
                            <input
                                type="number"
                                value={pnrvalue}
                                onChange={handleInputChange}
                                placeholder="10-digit-Number"
                                className="input input-bordered input-info w-full max-w-56" required
                            />
                        </div>
                        <div className='search_container'>
                            <button onClick={handleButtonClick} className='btn btn-warning'>Fetch Data</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 space-y-3 place-items-center mt-2'>
                {responseData.map((item, index)=>(
                    <Passengerdetailbox key={index} passengernumber={item.Number} berth={item.Berth} coach={item.BookingCoachId} />
                ))}
            </div>
        </div>
    );
};

export default Statusbox;
