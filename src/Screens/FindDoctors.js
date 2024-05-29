import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import DoctorRows from '../Components/DoctorRows'
import { get } from 'mongoose';

function FindDoctors() {
  
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const[doctorFetched,setDoctorFetched]=useState([]);
  const [hospitals,setHospitals]=useState([])
  const [specialties,setSpeciality] = useState([])
  
  useEffect(()=>{
    const getHospitals= async()=>{
        await fetch('http://localhost:8000/getHospitals')
        .then(res=>res.json())
        .then(data=>setHospitals(data))
        .catch(err=>console.log("internal Error Occured",err))
      }
    const getSpecialities= async()=>{
        await fetch('http://localhost:8000/getSpecialities')
        .then(res=>res.json())
        .then(data=>setSpeciality(data))
        .catch(err=>console.log("internal Error Occured",err))
      }

    const data={
      hospitalname:selectedHospital,
      specializationName:selectedSpecialty
    }


    const getDoctors=(async (e)=>{
            
        await fetch('http://localhost:8000/getDoctors',{
            method:'POST',
            headers: {
              'Content-Type': 'application/json'
          },
            body:JSON.stringify(data)
        
          })
            .then(res=>res.json())
            .then(data=>setDoctorFetched(data))
            .catch(err=>console.log("internal Error Occured"))
    
      

})
      getHospitals();
      getSpecialities();
      getDoctors();
     

      
},[selectedHospital,selectedSpecialty])

console.log(doctorFetched)
  return (
    <div>
      <Navbar/>

      <div className="p-4 bg-white shadow-md rounded-lg">
        <div className="text-red-500 text-lg font-bold mb-4">Find a Doctor</div>
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
              value={selectedDoctor}
              onChange={e => setSelectedDoctor(e.target.value)}
            >
              <option value="">Search Doctor</option>
              {doctorFetched.map(doctors => (
                <option key={doctors._id} value={doctors.name}>
                  {doctors.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-auto flex-grow">
            <button className="p-2 bg-red-500 text-white rounded-lg shadow-md w-full">Search</button>
          </div>
        </div>
      </div>
     {doctorFetched.map((item)=>(
        <DoctorRows items={item}/>
     ))}
    </div>
  );
};


export default FindDoctors