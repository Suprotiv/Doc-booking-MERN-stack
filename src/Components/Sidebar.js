import React from 'react';
import { FaBars } from 'react-icons/fa';

function Sidebar({ isOpen, toggleSidebar }) {
    const user = 'supro';
  
    return (
      <div className={`fixed h-screen transition-all duration-300 ${isOpen ? 'z-[100]' : 'z-[0]'}`}>
        <div className={`bg-white h-full w-[25vh] md:w-[35vh] flex flex-col shadow-xl transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex justify-center w-full'>
        <h1 className='text-2xl font-bold text-gray-800 mb-10 mt-8'>UserName</h1>
      </div>
      <p className='rounded text-lg text-gray-800 mx-5 my-1 px-3 py-2 hover:text-white hover:bg-blue-900 transition duration-100 ease-in-out hover:cursor-pointer'>Dashboard</p>
      <p className='rounded text-lg text-gray-800 mx-5 my-1 px-3 py-2 hover:text-white hover:bg-blue-900 transition duration-100 ease-in-out hover:cursor-pointer'>Hospitals</p>
      <p className='rounded text-lg text-gray-800 mx-5 my-1 px-3 py-2 hover:text-white hover:bg-blue-900 transition duration-100 ease-in-out hover:cursor-pointer'>Specialities</p>
      <p className='rounded text-lg text-gray-800 mx-5 my-1 px-3 py-2 hover:text-white hover:bg-blue-900 transition duration-100 ease-in-out hover:cursor-pointer'>Statistics</p>
      <p className='rounded text-lg text-gray-800 mx-5 my-1 px-3 py-2 hover:text-white hover:bg-blue-900 transition duration-100 ease-in-out hover:cursor-pointer'>Users Details</p>
      <p className='rounded text-lg text-gray-800 mx-5 my-1 px-3 py-2 hover:text-white hover:bg-blue-900 transition duration-100 ease-in-out hover:cursor-pointer'>Doctor Details</p>
      <p className='rounded text-lg text-gray-800 mx-5 my-1 px-3 py-2 hover:text-white hover:bg-blue-900 transition duration-100 ease-in-out hover:cursor-pointer'>Bookings</p>
      <p className='rounded text-lg text-gray-800 mx-5 my-1 px-3 py-2 hover:text-white hover:bg-blue-900 transition duration-100 ease-in-out hover:cursor-pointer'>Newsletter</p>
      <p className='rounded text-lg text-gray-800 mx-5 my-1 px-3 py-2 hover:text-white hover:bg-blue-900 transition duration-100 ease-in-out hover:cursor-pointer'>Refund/Return</p>
        </div>
        {user ? (
          <FaBars className='text-2xl font-bold text-gray-800 mx-3  mt-3 absolute top-0 left-0  hover:cursor-pointer' onClick={toggleSidebar} />
        ) : null}
      </div>
    );
  }
  
  export default Sidebar;