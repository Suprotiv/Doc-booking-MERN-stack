import React from 'react'

function Midsection() {
  return (
     <div className=" py-8 flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-8 p-8 bg-gray-200">
      
      {/* Get Care */}
      <div className="bg-white shadow-md rounded-lg p-6 flex-1">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Get Care</h2>
        <p className="text-gray-700 mb-4">Getting an appointment at Cleveland Clinic is easy. Schedule using any of these convenient options.</p>
        <hr className="mb-4" />
        <ul className="text-blue-600 space-y-2">
          <li><a href="tel:8663204573" className="hover:text-blue-900">866.320.4573</a></li>
          <li><a href="#appointment-form" className="hover:text-blue-900">Appointment request form</a></li>
          <li><a href="#virtual-visits" className="hover:text-blue-900">Virtual visits</a></li>
          <li><a href="#express-care" className="hover:text-blue-900">Express Care and Urgent Care</a></li>
          <li><a href="#virtual-second-opinions" className="hover:text-blue-900">Virtual second opinions</a></li>
        </ul>
      </div>

      {/* Live Healthier */}
      <div className="bg-white shadow-md rounded-lg p-6 flex-1">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Live Healthier</h2>
        <p className="text-gray-700 mb-4">Find health and wellness information to help you and your family live a bit healthier each day.</p>
        <hr className="mb-4" />
        <ul className="text-blue-600 space-y-2">
          <li><a href="#health-news" className="hover:text-blue-900">Health news and trends</a></li>
          <li><a href="#newsletter" className="hover:text-blue-900">Sign up for our newsletter</a></li>
          <li><a href="#podcast" className="hover:text-blue-900">Tune in to our podcast</a></li>
          <li><a href="#nutrition" className="hover:text-blue-900">Nutrition and healthy eating</a></li>
          <li><a href="#fitness" className="hover:text-blue-900">Exercise & Fitness</a></li>
        </ul>
      </div>

      {/* Need Help? */}
      <div className="bg-white shadow-md rounded-lg p-6 flex-1">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Need Help?</h2>
        <p className="text-gray-700 mb-4">Have a question? We want to make it easy to find what you're looking for. Get answers online fast.</p>
        <hr className="mb-4" />
        <ul className="text-blue-600 space-y-2">
          <li><a href="tel:2164442200" className="hover:text-blue-900">216.444.2200</a></li>
          <li><a href="#main-campus" className="hover:text-blue-900">Visiting our main campus</a></li>
          <li><a href="#pay-bill" className="hover:text-blue-900">Pay your bill online</a></li>
          <li><a href="#mychart" className="hover:text-blue-900">MyChart</a></li>
          <li><a href="#medical-records" className="hover:text-blue-900">Request your medical records</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Midsection