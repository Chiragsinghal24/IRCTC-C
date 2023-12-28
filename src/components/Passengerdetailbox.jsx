import React from 'react'

const Passengerdetailbox = ({berth,coach, passengernumber}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body w-full">
                <h2 className="card-title">
                    Passenger {passengernumber}
                    <div className="badge badge-secondary  ml-auto">CNF</div>
                </h2>
                <div className='flex'>
                    <div>
                        <p><span className='font-bold text-[15px]'>Coach No</span></p>
                        <p className='font-bold text-[14px]'>{coach}</p>
                    </div>

                    <div className='ml-auto'>
                        <p><span className='font-bold text-[15px]'>Berth No</span></p>
                        <p className='font-bold text-[14px]'>{berth}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Passengerdetailbox