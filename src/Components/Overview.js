import React, { useEffect, useState } from 'react';

function Overview({ isOpen }) {

    const data=['1','2','3','4','5','6','7','8','9']
    const [toggle,setToggle]=useState(true);

    const switchcolor=()=>{
        setToggle(!toggle)
    }
    useEffect(() => {
        switchcolor(); // Call switchcolor function when the component renders
    }, []);
    return (
        <div 
        className={`bg-white  mb-[5vh] z-0 p-4 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[630px] relative  rounded-xl  transition-all duration-200 inline-block hover:shadow-xl ${isOpen ? 'ml-[10%] md:ml-[6%] z-0' : 'ml-[10%] md:ml-[9%] z-10'}`}
      >
        <div className='flex justify-between w-full'>
           
          <div className='w-full'>
          <h1 className='text-xl pb-4 '>Category wise product sale</h1>
            {
                data.map((val)=>(
                    <div className={`p-2 my-2 my-3text-black w-full bg-gray-100 rounded`}>{val}</div>
                ))
            }
          </div>
        </div>
      </div>
    );
  }
  
  export default Overview;
  