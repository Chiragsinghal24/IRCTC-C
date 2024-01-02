import React, { useEffect, useState } from 'react'
import Trainroute from './Trainroute'
import { FaTrainSubway } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom';

const Trainmap = () => {

    const [stationdataarray, setstaiondatadrray] = useState([]);

    const location = useLocation();
    const trainNumber = new URLSearchParams(location.search).get('trainNumber');
    const trainName = new URLSearchParams(location.search).get('trainName');
    console.log("trainname:", trainName);
    console.log("train no", trainNumber);

    const handleButtonClick = async () => {
        try {
            const apiUrl = `https://gotrains.goibibo.com/v2/trains/status/${trainNumber}?flavour=mweb`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log("data is:",data);
            const newStationDataArray = [
                ...stationdataarray,
                ...data.response.station_data
                    .map(item => item.values)
                    .flat()
            ];

            console.log(newStationDataArray);
            setstaiondatadrray(newStationDataArray);

            console.log("fetchwd data", data.response.station_data);

        } catch (error) {
            alert("Please enter a correct train details.");
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        handleButtonClick();
    }, [])

    return (
        <div className="bg-gradient-to-l from-purple-950 to-black flex flex-col w-screen min-h-screen">
            <div className='bg-white border-r-[4px] p-5 text-center flex justify-center lg:gap-4'>
                <div className='mt-2'>
                    <FaTrainSubway size={22} />
                </div>
                <div className='flex items-center'>
                    <h1 className='text-2xl font-bold'>{trainNumber}- {decodeURIComponent(trainName)}</h1>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-2 gap-2 place-content-center'>
                {stationdataarray.map((item ,index)=>(
                    <Trainroute key={index} stationcode={item.station.code} stationNumber={index+1} stationname={item.station.cn} state={item.station.stateName} distance={item.distance} arrival={item.schedule_arrival} depart={item.schedule_departure} />
                ))}
            </div>
        </div>
    )
}

export default Trainmap