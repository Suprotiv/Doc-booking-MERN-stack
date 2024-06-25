import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Midsection from '../Components/Midsection'
import Topsection from '../Components/Topsection'
import BottomSection from '../Components/BottomSection'
import ViralInfections from '../Components/ViralInfections'

function Main() {
  return (
    <div >
    <Navbar/>
    <div className='h-[6vh]'></div>
    <main className="relative">
       <div>
      <div className=' top-0 left-0 w-full h-[80vh] text-white '>
        <div className='w-full h-full'>
            <div className=' absolute w-full h-[80vh]  bg-gradient-to-t from-gray-900'></div>
            <div className='absolute top-[190px] w-[95%] h-[40vh] mx-[2%] my-5'>
            <h1 className="text-4xl  md:text-7xl mt-[25vh] text-white font-bold text-center hover:cursor-pointer transition-all duration-300">
             Always by your side, for every moment that matters.
           </h1>           
            </div>
          <img className='w-full h-full object-cover' src='/doc5.jpg' alt='title' />
        </div>
      </div>
    </div>
    </main>
    <Topsection/>
    <Midsection/>
    <BottomSection/>
    <ViralInfections/>
    <Footer/>
    </div>
  )
}

export default Main