import React from 'react'
import Trainroute from './Trainroute'
import { FaTrainSubway } from 'react-icons/fa6'
import { useParams } from 'react-router-dom';

const Trainmap = () => {
    const { trainNumber, trainName } = useParams();
    
    console.log("trainname:",trainName);
    console.log("train no",trainNumber);

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
                <Trainroute />
                <Trainroute />
                <Trainroute />
                <Trainroute />
                <Trainroute />
                <Trainroute />
                <Trainroute />
                <Trainroute />
                <Trainroute />
            </div>
        </div>
    )
}

export default Trainmap