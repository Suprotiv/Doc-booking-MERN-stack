import React from 'react'

function Savedbookings({items}) {
  return (
    <div className='flex justify-center'>
    <div className='z-[-100] bg-gray-800 w-[90%] flex items-center cursor-pointer relative p-3 md:p-6 my-6 gap-4 md:gap-8 rounded-xl'>
    <img src='https://via.placeholder.com/100' className=' h-[90px] md:h-[100px] w-[90px] md:w-[100px] rounded-full border-2 border-gray-300' alt='/'/>
     <div className='mx-5'>
        <h1 className='text-white py-2 text-xl md:text-3xl font-bold'>{items.doctorDetails.name}</h1>
        <p className='text-white py-2'>description : {items.doctorDetails.about}</p>
        <p className='text-white py-2'>field : {items.specialty_details.name}</p> 
       
        <p className='text-white py-2' >Status : {items?.status}</p>
        </div>
    </div>
    </div>
  )
}

export default Savedbookings