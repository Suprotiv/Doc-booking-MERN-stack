import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
    const [isSpecialitiesDropdownOpen, setIsSpecialitiesDropdownOpen] = useState(false);
    const [isIwantoDropdownOpen,setIsIwantoDropdownopen]=useState(false);

    const handleLocationMouseEnter = () => {
        setIsLocationDropdownOpen(true);
    };

    const handleLocationMouseLeave = () => {
        setIsLocationDropdownOpen(false);
    };

    const handleSpecialitiesMouseEnter = () => {
        setIsSpecialitiesDropdownOpen(true);
    };

    const handleSpecialitiesMouseLeave = () => {
        setIsSpecialitiesDropdownOpen(false);
    };

    const handleIwanttoMouseEnter = () => {
        setIsIwantoDropdownopen(true);
    };

    const handleIwanttoMouseLeave = () => {
        setIsIwantoDropdownopen(false);
    };

    return (
        <div className='bg-black w-full h-[50px] py-3 px-2 md:px-8 flex justify-between'>
            <Link to='/'>
           <h1 className='text-white text-sm md:text-lg font-bold hover:cursor-pointer'>App-Name</h1>
           </Link>
            <div className='flex gap-4 md:gap-8'>
                <div 
                  className='relative flex md:justify-center h-[4vh]' 
                    onMouseEnter={handleLocationMouseEnter} 
                    onMouseLeave={handleLocationMouseLeave}
                >
                    <h1 className={`text-sm md:text-lg hover:cursor-pointer rounded transition-all duration-100 ${isLocationDropdownOpen ? 'text-black bg-white ' : 'text-white'}`}>Location</h1>
                    {isLocationDropdownOpen && (
                         <div className='absolute top-full  py-2 px-1 md:py-4 md:px-6   bg-white  w-[20vh] md:w-[40vh] text-black shadow-lg rounded'
                         onMouseEnter={handleLocationMouseEnter} 
                         onMouseLeave={handleLocationMouseLeave}>
                            <div className='flex justify-between '>
                            <p className='px-2 md:px-4 py-2 text-sm md:text-md hover:bg-gray-200'>Location 1</p>
                            <p className='px-2 md:px-4 py-2 text-sm md:text-md hover:bg-gray-200'>Location 2</p>
                            </div>
                            <div className='flex justify-between'>
                            <p className='px-2 md:px-4 py-2 text-sm md:text-md hover:bg-gray-200'>Location 1</p>
                            <p className='px-2 md:px-4 py-2 text-sm md:text-md hover:bg-gray-200'>Location 2</p>
                            </div>
                            <div className='flex justify-between'>
                            <p className='px-2 md:px-4 py-2 text-sm md:text-md hover:bg-gray-200'>Location 1</p>
                            <p className='px-2 md:px-4 py-2 text-sm md:text-md hover:bg-gray-200'>Location 2</p>
                            </div>
                        </div>
                    )}
                </div>
                <div 
                    className='relative flex justify-center h-[4vh]' 
                    onMouseEnter={handleSpecialitiesMouseEnter} 
                    onMouseLeave={handleSpecialitiesMouseLeave}>
                    <h1 className={`text-sm md:text-lg hover:cursor-pointer rounded transition-all duration-100 ${isSpecialitiesDropdownOpen ? 'text-black bg-white ' : 'text-white'}`}>Specialities</h1>
                    {isSpecialitiesDropdownOpen && (
                    <div
                        className={`absolute top-full py-2 px-1 md:py-4 md:px-6 bg-white w-[20vh] md:w-[40vh] text-black shadow-lg rounded`}
                        onMouseEnter={handleSpecialitiesMouseEnter}
                        onMouseLeave={handleSpecialitiesMouseLeave}
                    >
                        <div className='flex justify-between'>
                        <p className='px-2 md:px-4 py-2 text-sm md:text-md hover:bg-gray-200'>Location 1</p>
                        <p className='px-2 md:px-4 py-2 text-sm md:text-md hover:bg-gray-200'>Location 2</p>
                        </div>
                        <div className='flex justify-between'>
                        <p className='px-2 md:px-4 py-2 text-sm md:text-md hover:bg-gray-200'>Location 1</p>
                        <p className='px-2 md:px-4 py-2 text-sm md:text-md hover:bg-gray-200'>Location 2</p>
                        </div>
                        <div className='flex justify-between'>
                        <p className='px-2 md:px-4 py-2 text-sm md:text-md hover:bg-gray-200'>Location 1</p>
                        <p className='px-2 md:px-4 py-2 text-sm md:text-md hover:bg-gray-200'>Location 2</p>
                        </div>
                    </div>
                    )}

                </div>
                <Link to='/doctors'>
                <h1 className='hidden sm:block text-white text-sm md:text-lg h-[4vh] hover:cursor-pointer rounded hover:bg-white hover:text-black transition-all duration-100'>Find a doctor</h1>
                </Link>
                <h1 className='hidden sm:block text-white text-sm md:text-lg h-[4vh] hover:cursor-pointer rounded hover:bg-white hover:text-black transition-all duration-100'>International Patients</h1>
            </div>

            <div className='flex gap-4 md:gap-8'>
                 <div 
                    className='relative flex justify-center h-[4vh] transition-all duration-300' 
                    onMouseEnter={handleIwanttoMouseEnter} 
                    onMouseLeave={handleIwanttoMouseLeave}>
                    <h1 className='text-white text-sm md:text-lg hover:cursor-pointer rounded hover:bg-white hover:text-black transition-all duration-100'>I want to</h1>
                    {isIwantoDropdownOpen && (
                        <div className='absolute top-full py-2 px-1 md:py-4 md:px-6   bg-white w-[20vh] md:w-[30vh] p-2 text-black shadow-lg rounded '
                        onMouseEnter={handleIwanttoMouseEnter} 
                        onMouseLeave={handleIwanttoMouseLeave}>
                           <div>
                            <p className='px-4 py-2 hover:bg-gray-200'>Book an appointment</p>
                            <Link to='/doctors'>
                            <p className='px-4 py-2 hover:bg-gray-200'>Find a doctor</p>
                            </Link>
                            <p className='px-4 py-2 hover:bg-gray-200'>Make online payment</p>
                           </div>
                        </div>
                    )}
                </div>
                <p className='text-white  text-sm md:text-lg hover:cursor-pointer'>Account</p>
            </div>
        </div>
    );
}

export default Navbar;
