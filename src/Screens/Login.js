import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[error,setError]=useState()
    const[type,setType]=useState()

    const navigate=useNavigate()

    const submitlogin= async (e)=>{
        e.preventDefault()
        if(type==='doctor')
        {
            
            const userdata={
                email:email,
                password:password
            }
            
            await fetch('http://localhost:8000/LoginDoctor',{
            method:'POST',
            headers: {
              'Content-Type': 'application/json'
          },
            body:JSON.stringify(userdata)
        
          })
            .then(res=>res.json())
            .then(data=>
                {
                    if(data._id)
                    {
                    navigate(`/doctorprofile/${data._id}`)
                    window.localStorage.setItem('user', JSON.stringify(data))
                    }
                    else
                    {
                        setError(data.message)
                    }
                })
            .catch(err=>console.log("internal Error Occured"))
        }
        else
        {
            const userdata={
                email:email,
                password:password
            }
            
            await fetch('http://localhost:8000/LoginUser',{
            method:'POST',
            headers: {
              'Content-Type': 'application/json'
          },
            body:JSON.stringify(userdata)
        
          })
            .then(res=>res.json())
            .then(data=>
                {
                    if(data._id)
                    {
                    navigate(`/userprofile/${data._id}`)
                    window.localStorage.setItem('user', JSON.stringify(data))
                    }
                    else
                    {
                        setError(data.message)
                    }
                })
            .catch(err=>console.log("internal Error Occured"))
        }
    }


  
  return (
    <>
     <div className='fixed bg-neutral-200  top-0 left-0 w-full h-screen'></div>
    <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-gray-900 text-white rounded-lg'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold flex justify-center my-3'>Login</h1>
              {
                    error ?<p className='bg-red-900 text-white p-3 rounded'>{error}</p>:null
              }
          <form className='w-full flex flex-col  py-4'>
            <input className='bg-gray-600 py-2 my-2 px-2' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input className='bg-gray-600 py-2 my-2 px-2' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} type='password'></input>
            <select className='bg-gray-600 py-2 my-2 px-2' onChange={(e) => setType(e.target.value)}>
                 <option value="patient">Patient</option>
                 <option value="doctor">Doctor</option>
            </select>
            <button className='bg-blue-500 py-4 my-4 rounded text-lg' onClick={submitlogin}>Log in</button>
            <div className='flex justify-between'>
            <p className='flex items-center'><input type='checkbox' className='mr-2'></input> 
           
            <p className='text-sm'>Remember me </p>
            </p>
            <p className='text-sm'>Need Help ?</p>
            </div>
            <p className='text-md my-10 mx-8'><span className='text-gray-600 mx-2'>New to our website ?</span><Link to='/signup'>Sign up</Link></p>
          </form>
            
          
        </div>
        </div>
        </div>
    
    </>
  )
}

export default Login