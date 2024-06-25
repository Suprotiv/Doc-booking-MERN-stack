import React from 'react';
import { FaBars } from 'react-icons/fa';

function Stats({ isOpen }) {


    return (
      <div 
        className={`bg-white h-[35vh] mb-[5vh] z-0 p-4 w-[160px] sm:w-[210px] md:w-[220px] lg:w-[330px] relative  rounded-xl  transition-all duration-200 inline-block hover:shadow-xl ${isOpen ? 'ml-[5%] md:ml-[3%] z-0' : 'ml-[5%] z-10'}`}
      >
        <div className='flex justify-between w-full'>
          <div className=''>
            <h1 className='text-black text-xl my-4'>Total published products: 60</h1>
            <h1 className='text-black text-xl my-4'>Total admin products :80</h1>
            <div className='p-1 w-full font-bold bg-blue-900 absolute bottom-0 left-0 hover:cursor-pointer rounded-b-xl'>
            <h1 className='text-white flex justify-center my-2'>Add to list </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Stats;
  