import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import Savedbookings from '../Components/Savedbookings';

function Account() {

  const[bookings,setBookings]=useState([])
  const user = window.localStorage.getItem('user');
  const[option,setOption]=useState('pending')

  
  useEffect(()=>{

    const FectchListings=(async()=>{

        const data={
            userid:user,
            status:option
          }
        

        await fetch('http://localhost:8000/getBookingsUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(res => res.json())
            .then(data => setBookings(data))
            .catch(err => console.log("internal Error Occured"));

    })
    FectchListings()

  },[user,option])
  console.log(bookings)
  return (
    <div><Navbar/>
       <div className='flex justify-center items-center gap-6 pt-[10vh]'>
       <p className={` font-bold text-lg md:text-3xl hover:cursor-pointer ${option === 'pending' ? 'text-gray-900' :'text-gray-400'}`} onClick={() => setOption('pending')}>Pending</p>
    <p className={`font-bold text-lg md:text-3xl hover:cursor-pointer ${option === 'confirmed' ? 'text-gray-900' : 'text-gray-400'}`} onClick={() => setOption('confirmed')}>Confirmed</p>
    <p className={`font-bold text-lg md:text-3xl hover:cursor-pointer ${option === 'rejected' ? 'text-gray-900' : 'text-gray-400'}`} onClick={() => setOption('rejected')}>Rejected</p>
    </div>
    
        <div>
          {
            (bookings.length!==0)?
           bookings.map((item)=>(
            <Savedbookings items={item}/>
           ))
           :
           <p className='text-5xl font-bold text-gray-300 flex justify-center items-center h-[60vh]'>Nothing to Show !</p>
          }
        </div>
            
    </div>
  )
}

export default Account