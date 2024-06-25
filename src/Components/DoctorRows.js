import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function DoctorRows({items}) {

  const navigate=useNavigate()

  const sendata=()=>{
    window.localStorage.setItem('doctor', JSON.stringify(items));
    navigate(`/doctors/${items?._id}`)
  }
  return (
    <>
  <div className="w-full my-10 bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-7xl  bg-white rounded-xl shadow-md overflow-hidden md:flex md:items-center">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full md:mx-5 object-cover md:w-48"
            src="https://via.placeholder.com/150"
            alt="Doctor"
          />
        </div>
        <div className="p-4 md:flex-1">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          <i>{items.name}</i>
          </div>
          <div className="mt-1 text-gray-600">{items.about}</div>
          <div className="mt-2">
            <h3 className="text-gray-900 font-bold">DEPARTMENTS</h3>
            <p className="text-gray-600">{items.specialty_details.name}</p>
          </div>
          <div className="mt-1">
            <h3 className="text-gray-900  font-bold">LOCATIONS</h3>
            <p className="text-gray-600">{items.hospital_details.address}</p>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300" onClick={sendata}>
            REQUEST AN APPOINTMENT
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default DoctorRows