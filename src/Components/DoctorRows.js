import React from 'react'

function DoctorRows({items}) {
  return (
    <>
    <div className='bg-gray-800 w-[90%] flex items-center cursor-pointer relative p-3 md:p-6 my-8 mx-[5%] gap-4 md:gap-8 rounded-xl'>
        <div className='flex justify-between w-full'>
         <div className='flex  w-[80%]' >
            <img src='' className=' h-[90px] md:h-[100px] w-[90px] md:w-[100px]' alt='/'/>
            <div>
            <h1 className='text-white py-2 text-xl md:text-3xl font-bold'>{items?.name}</h1>
            <p className='text-white py-2'>email : {items?.email}</p>
            </div>
        </div>
        <div>
            <button className='mt-[35%] border rounded text-white font-bold bg-gray-500 hover:bg-gray-700  border-gray-700 py-1 px-2'>Following</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default DoctorRows