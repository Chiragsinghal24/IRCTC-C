import React from 'react'

const Trainroute = () => {
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <div className="card-body w-full">
                <h2 className="card-title">
                    Station 1
                    <div className="badge badge-secondary">AII</div>
                    <p><span className='text-sm'>Dist: </span>
                        <span className='text-sm'>2123Km</span>
                    </p>
                </h2>
                <div className='flex'>
                    <div>
                        <p><span className='font-bold text-[15px]'>Ajmer</span></p>
                        <p className='font-semibold text-[15px]'>(Rajasthan)</p>
                    </div>

                    <div className='flex-col ml-auto'>
                        <div className='flex items-center'>
                            <span>
                                <span className='text-[12px] font-bold'>Arrival: </span>
                                <span className='text-[10px]'>05:45</span>
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <span className='h-[8px] w-[8px] border border-solid border-gray-500 opacity-40 block rounded-full relative mt-[-2px]'>
                            </span>
                            <span className='mt-[-6px]'>--------</span>
                            <span className='h-[8px] w-[8px] border border-solid border-gray-500 rounded-full block opacity-40 mt-[-2px]'></span>
                        </div>
                        <div className='mt-[-5px]'>
                            <p>
                                <span className='font-bold text-[12px]'>Depart:</span>
                                <span className='text-[10px]'> 05:45</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trainroute