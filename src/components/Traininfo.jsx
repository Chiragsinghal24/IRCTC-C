import React from 'react'

const Traininfo = ({ Trainname, Trainnumber, duration, arrival, departure, reaching }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">
                    {Trainname}
                    <div className="badge badge-secondary">{Trainnumber}</div>
                </h2>
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