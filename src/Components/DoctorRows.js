import React from 'react'
import { useNavigate } from 'react-router-dom';

function DoctorRows({items}) {

  const navigate=useNavigate()

  const sendata=()=>{
    window.localStorage.setItem('doctor', JSON.stringify(items));
    navigate(`/doctors/${items?._id}`)
  }
  return (
    <>
    <div className='z-[0] bg-gray-800 w-[90%] flex items-center cursor-pointer relative p-3 md:p-6 my-8 mx-[5%] gap-4 md:gap-8 rounded-xl ' onClick={sendata}>
        <div className='flex justify-between w-full'>
         <div className='flex  w-[80%]' >
            <img src='https://via.placeholder.com/100' className=' h-[90px] md:h-[100px] w-[90px] md:w-[100px] rounded-full border-2 border-gray-300' alt='/'/>
            <div className='mx-5'>
            <h1 className='text-white  py-2 text-xl md:text-3xl font-bold'>{items?.name}</h1>
            <p className='text-white py-2'>email : {items?.email}</p>
            </div>
        </div>
        <div>
        </div>
        </div>
    </div>
    </>
  )
}

export default DoctorRows