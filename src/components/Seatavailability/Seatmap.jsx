import React from 'react'
import { Link } from 'react-router-dom'

const Seatmap = () => {
    return (
        <div className="bg-gradient-to-l from-purple-950 to-black flex flex-col w-screen min-h-screen">
            <h1 className='text-center text-white font-sans text-2xl mb-2'>Coming Soon till now switch to train between stations</h1>
            <div className='flex justify-center mb-2 mt-4'>
                <button className='btn btn-warning'>
                    <Link to='/'>Go Back</Link>
                </button>
            </div>
        </div>
    )
}

export default Seatmap