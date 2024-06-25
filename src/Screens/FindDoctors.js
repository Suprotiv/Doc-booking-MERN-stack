import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import DoctorRows from '../Components/DoctorRows'
import { get } from 'mongoose';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

function FindDoctors() {
  
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const[doctorFetched,setDoctorFetched]=useState([]);
  const [hospitals,setHospitals]=useState([])
  const [specialties,setSpeciality] = useState([])
  const navigate=useNavigate()

  const handleDoctorChange = (e) => {
    const doctorId = e.target.value;
    const doctor = doctorFetched.find(doc => doc._id === doctorId);
    setSelectedDoctor(doctor);
  };

  console.log(doctorFetched)
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const hospitalsResponse = await fetch('http://localhost:8000/getHospitals');
        const hospitalsData = await hospitalsResponse.json();
        setHospitals(hospitalsData);

        const specialitiesResponse = await fetch('http://localhost:8000/getSpecialities');
        const specialitiesData = await specialitiesResponse.json();
        setSpeciality(specialitiesData);

        if (selectedHospital && selectedSpecialty) {
          const doctorsResponse = await fetch('http://localhost:8000/getDoctors', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              hospitalname: selectedHospital,
              specializationName: selectedSpecialty
            })
          });

          const doctorsData = await doctorsResponse.json();
          setDoctorFetched(doctorsData);
        }
      } catch (err) {
        console.log("internal Error Occured", err);
      }
    };

    fetchData();
      
},[selectedHospital,selectedSpecialty])

const loaddoc=()=>{
  window.localStorage.setItem('doctor', JSON.stringify(selectedDoctor));
  navigate(`/doctors/${selectedDoctor?._id}`)
}

  return (
    <div className='h-screen'>
      <Navbar/>

      <div className="p-4 bg-white shadow-md rounded-lg">
        <div className="text-blue-500 text-lg font-bold mb-4">Find a Doctor</div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-auto flex-grow">
            <select
              className="p-2 border rounded-lg shadow-sm w-full"
              value={selectedHospital}
              onChange={e => setSelectedHospital(e.target.value)}
            >
              <option value="">Hospital</option>
              {hospitals.map(hospital => (
                <option key={hospital.name} value={hospital.name}>
                  {hospital.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-auto flex-grow">
            <select
              className="p-2 border rounded-lg shadow-sm w-full"
              value={selectedSpecialty}
              onChange={e => setSelectedSpecialty(e.target.value)}
            >
              <option value="">Speciality</option>
              {specialties.map(specialty => (
                <option key={specialty.name} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-auto flex-grow">
          <select
        className="p-2 border rounded-lg shadow-sm w-full"
        value={selectedDoctor?._id || ""}
        onChange={handleDoctorChange}
      >
        <option value="">Search Doctor</option>
        {doctorFetched.map(doctor => (
          <option key={doctor._id} value={doctor._id}>
            {doctor.name}
          </option>
        ))}
      </select>
          </div>

          <div className="w-full md:w-auto flex-grow">
            <button className="p-2 bg-blue-500 text-white rounded-lg shadow-md w-full" onClick={loaddoc}>Search</button>
          </div>
        </div>
      </div>
     {doctorFetched.map((item)=>(
        <DoctorRows items={item}/>
     ))
}
    </div>
  );
};


export default FindDoctors