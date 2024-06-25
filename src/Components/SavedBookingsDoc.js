import React from 'react'

export default function SavedBookingsDoc({items}) {

    const confirm= async()=>{

        const data={
            _id:items._id,
            status:'confirmed'
          }
        

        await fetch('http://localhost:8000/updateBooking', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(res => res.json())
            .then(data => alert(data.message))
            .catch(err => console.log("internal Error Occured"));
    }
    const reject= async ()=>{


        const data={
            _id:items._id,
            status:'rejected'
          }
        

        await fetch('http://localhost:8000/updateBooking', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(res => res.json())
            .then(data => alert(data.message))
            .catch(err => console.log("internal Error Occured"));
        
    }
  return (
    <>
    {
        <div className=' bg-gray-800 w-[90%] flex items-center cursor-pointer relative p-3 md:p-6 my-8 mx-3 gap-4 md:gap-8'>
    <img src='logo192.png' className=' h-[90px] md:h-[100px] w-[90px] md:w-[100px]' alt=''/>
    <div>
    <h1 className='text-white py-2 text-xl md:text-3xl font-bold'>{items?.email}</h1>
    <p className='text-white py-2'>date : {items?.date}</p>
    <p className='text-white py-2'>time : {items?.time}</p> 
   
    <p className='text-white py-2 my-2' >Status : {items?.status}</p>   
    <div className='flex  gap-3 md:gap-5'>
        { items?.status==='pending' ?
            <>
        <button className='bg-gray-300 p-2 text-lg font-bold rounded' onClick={confirm}>Confirm</button>
        <button className='bg-gray-300 p-2 text-lg font-bold rounded' onClick={reject}>Reject</button>
            </>
            :null
        }
    </div>
    </div>
</div> 
     }
</>
  )
}
