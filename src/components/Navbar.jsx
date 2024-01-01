import React from 'react'
import { Link } from "react-router-dom"

const MenuItems = () => {
    return (
        <>
            <li className="text-black text-lg shadow-lg bg-red-100 rounded-md hover:shadow-lg hover:shadow-yellow-300"><Link to='/'>Train between Stations</Link></li>
            <li className="text-black text-lg shadow-lg bg-red-100 rounded-md hover:shadow-sm hover:shadow-yellow-300"><Link to='/livestatus'>Train Route</Link></li>
            <li className="text-black text-lg shadow-lg bg-red-100 rounded-md hover:shadow-sm hover:shadow-yellow-300"><Link to='/status'>PNR Status</Link></li>
            <li className="text-black text-lg shadow-lg bg-red-100 rounded-md hover:shadow-sm hover:shadow-yellow-300"><Link to='/traintimetable'>Time Table</Link></li>
            <li className="text-black text-lg shadow-lg bg-red-100 rounded-md hover:shadow-sm hover:shadow-yellow-300"><Link to='/seatmap'>Seat Available</Link></li>
            <li className="text-black text-lg shadow-lg bg-red-100 rounded-md hover:shadow-sm hover:shadow-yellow-300"><Link to='/'>Book Tickets</Link></li>
        </>
    )
}

const Navbar = () => {
    return (
        <nav className="navbar ml-2 mr-2 bg-white shadow-xl z-50 fixed top-2 max-w-[1000px]">
            <div className="navbar-start w-screen">
                <Link to='/' className="navbar rounded-md"><img src={'https://imgur.com/8nrGPhp.png'} className="w-[100px]" alt="Company" /></Link>
            </div>
            <div className="navbar-center md:navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1">
                    <MenuItems />
                </ul>
            </div>
            <div className="navbar-start">
                <div className="dropdown dropdown-start w-full">
                    <label tabIndex={0} className="btn btn-error lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box min-w-32 gap-1 mr-2">
                        <MenuItems />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar