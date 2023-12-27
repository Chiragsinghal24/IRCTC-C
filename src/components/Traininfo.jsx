import React, { useEffect, useState } from 'react'
import Coachbox from './Coachbox';

const Traininfo = ({ Trainname, Trainnumber, duration, arrival, reaching,
    distance, halts, SFCode, STCode, SFname, STname,coachtype,date }) => {

    const durationString = duration;
    const [hours, minutes] = durationString.split(':').map(Number);


    const [fairArray, setFairArray] = useState(coachtype);

    // const fetchMe = async () => {
    //     const url = `https://irctc1.p.rapidapi.com/api/v2/getFare?trainNo=${Trainnumber}&fromStationCode=${SFCode}&toStationCode=${STCode}`;
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'bea9d496e2msh8e936fd3b850333p186413jsn2c7e6fe355b9',
    //             'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.json();
    //         console.log("data result",result);
    //         console.log("resut is:",result.data);
    //         setFairArray(result.data);
    //         console.log("fair array is:",fairArray);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     fetchMe();
    // }, []);


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body w-full">
                <h2 className="card-title">
                    {Trainname}
                    <div className="badge badge-secondary  ml-auto">{Trainnumber}</div>
                </h2>
                <div className='flex'>
                    <div>
                        <p>{SFCode} <span className='font-bold text-[15px]'>{arrival}</span></p>
                        <p className='font-bold text-[10px]'>{SFname}</p>
                    </div>

                    <div className='flex-col ml-auto'>
                        <div className='flex items-center'>
                            <img src='https://imgur.com/teG52J3.png' className='w-[11px] h-[11px]'></img>
                            <span className='ml-2'>
                                <span className='text-[12px] font-bold'>{hours}h </span>
                                <span className='text-[10px]'>{minutes}m</span>
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <span className='h-[8px] w-[8px] border border-solid border-gray-500 opacity-40 block rounded-full relative mt-[-2px]'>
                            </span>
                            <span className='mt-[-6px]'>-----------</span>
                            <span className='h-[8px] w-[8px] border border-solid border-gray-500 rounded-full block opacity-40 mt-[-2px]'></span>
                        </div>
                        <div className='mt-[-5px]'>
                            <p className='text-[12px]'>{halts} halts | {distance} km</p>
                        </div>


                    </div>
                    <div className='ml-auto'>
                        <p><span className='font-bold text-[15px] text-gray-400'>{reaching} </span>{STCode}</p>
                        <p className='font-bold text-[10px] text-gray-400'>{STname}</p>
                    </div>
                </div>
                <div className='w-full gap-3 flex overflow-x-auto overflow-hidden'>
                    {/* {trainCoach.map((item, index) => (
                        <Coachbox key={index} coachType={item.coach_type} trainnum={Trainnumber}
                            from={SFCode} to={STCode} />
                    ))} */}

                    {fairArray.map((item, index) => (
                        <Coachbox key={index} classtype={item.coach_type} trainnumber={Trainnumber} from={SFCode} to={STCode} date={date} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Traininfo