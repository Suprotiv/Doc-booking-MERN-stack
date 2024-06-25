import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import SavedBookingsDoc from '../Components/SavedBookingsDoc'

function Docprofile() {

  const[bookings,setBookings]=useState([])
  const user = JSON.parse(window.localStorage.getItem('user'));
  const[option,setOption]=useState('pending')

  useEffect(()=>{

    const FectchListings=(async()=>{

        const data={
            docid:user._id,
            status:option
          }
        

        await fetch('http://localhost:8000/getDoctorBookings', {
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

  return (
    <>
    <div>
      <Navbar/>
      <div className='flex justify-center items-center gap-6 pt-[10vh]'>
    <p className={` font-bold text-lg md:text-3xl hover:cursor-pointer ${option === 'pending' ? 'text-black' :'text-gray-400'}`} onClick={() => setOption('pending')}>Pending</p>
    <p className={`font-bold text-lg md:text-3xl hover:cursor-pointer ${option === 'confirmed' ? 'text-black' : 'text-gray-400'}`} onClick={() => setOption('confirmed')}>Confirmed</p>
    <p className={`font-bold text-lg md:text-3xl hover:cursor-pointer ${option === 'rejected' ? 'text-black' : 'text-gray-400'}`} onClick={() => setOption('rejected')}>Rejected</p>
    </div>

            <div>
            {
                 
           bookings.map((item)=>(
            <SavedBookingsDoc items={item}/>
           ))
          
          }
            </div>
    
    </div>
    </>
  )
}

export default Docprofile