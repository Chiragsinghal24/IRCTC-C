import React from 'react'

const Traininfo = ({ Trainname, Trainnumber, duration, arrival, departure, reaching,
    distance, halts, SFCode, STCode,SFname,STname }) => {

    const durationString = duration;
    const [hours, minutes] = durationString.split(':').map(Number);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
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
                <div >
                    <p>Arrival Time: <span className='text-red-600 text-md font-bold'>{arrival}</span></p>
                    <p>Departure Time: <span className='text-blue-600 text-md font-bold'>{departure}</span></p>
                    <p>Reached Time: <span className='text-gray-600 text-md font-bold'>{reaching}</span></p>
                    <p>Total Journey: <span className='text-gray-600 text-md font-bold'>{duration}</span></p>

                </div>
            </div>
        </div>
    )
}

export default Traininfo