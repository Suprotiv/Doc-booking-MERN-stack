import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLanguage, faHospital, faUserMd, faLock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/Navbar';

function DoctorsDetails() {
  const doctor = JSON.parse(window.localStorage.getItem('doctor'));
  const user = JSON.parse(window.localStorage.getItem('user'));

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedTimes, setBookedTimes] = useState([]);
  const [dates, setDates] = useState([]);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const dociddata = {
    docid: doctor._id
  };

  useEffect(() => {
    const getTimings = async () => {
      await fetch('http://localhost:8000/getTimings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dociddata)
      })
        .then(res => res.json())
        .then(data => setBookedTimes(data))
        .catch(err => console.log("internal Error Occured"));
    };

    getTimings();

    const generateNext7Days = () => {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const next7Days = [];
      const today = new Date();

      for (let i = 0; i < 7; i++) {
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + i);
        next7Days.push({
          day: daysOfWeek[futureDate.getDay()],
          date: futureDate.getDate()
        });
      }

      setDates(next7Days);
    };

    generateNext7Days();
  }, []);

  const morningSlots = ['10:00 AM', '10:15 AM', '10:30 AM', '10:45 AM', '11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM'];
  const afternoonSlots = ['12:00 PM', '12:15 PM', '12:30 PM', '12:45 PM'];

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const isTimeBooked = (time) => {
    return bookedTimes.some(booking => booking.date == selectedDate && booking.time == time);
  };

  const ConfirmBooking = async () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time');
      return;
    }
    if (isTimeBooked(selectedTime)) {
      alert('This time slot is already booked. Please select another time.');
      return;
    }

    const bookingdata = {
      userid: user._id,
      docid: doctor._id,
      time: selectedTime,
      date: selectedDate
    };

    await fetch('http://localhost:8000/addBooking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingdata)
    })
      .then(res => res.json())
      .then(data => {
        setIsBookingConfirmed(true);
      })
      .catch(err => console.log("internal Error Occured"));
  };

  return (
    <>
      <Navbar />
      <div className='h-[3vh]'></div>
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="mt-6 w-full md:w-2/3 p-6 overflow-y-scroll h-screen">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Doctor"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <div className="ml-4">
              <h1 className="text-2xl font-bold">{doctor.name}</h1>
              <p className="text-sm text-gray-600">{doctor.specialty_details.name}</p>
              <p className="text-sm text-gray-600">{doctor.work_experience}+ years experience</p>
              <p className="text-sm text-gray-600">MBBS MD( Medicine) DM (Cardiology) MRCP</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faGraduationCap} className="text-gray-600" />
              <div className="flex gap-1">
                {doctor.qualifications.map((val, idx) => (
                  idx !== 0 ? (
                    <p className="text-sm text-gray-600" key={idx}>, {val}</p>
                  ) : (
                    <p className="ml-2 text-sm text-gray-600" key={idx}>{val}</p>
                  )
                ))}
              </div>
            </div>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faLanguage} className="text-gray-600" />
              <div className="flex gap-1">
                {doctor.languages.map((val, idx) => (
                  idx !== 0 ? (
                    <p className="text-sm text-gray-600" key={idx}>, {val}</p>
                  ) : (
                    <p className="ml-2 text-sm text-gray-600" key={idx}>{val}</p>
                  )
                ))}
              </div>
            </div>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faHospital} className="text-gray-600" />
              <p className="mx-2 text-sm text-gray-600">{doctor.hospital_details.name}</p>
            </div>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faUserMd} className="text-gray-600" />
              <p className="ml-2 text-sm text-gray-600">{doctor.hospital_details.address}</p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-bold">About Doctor</h2>
            <p className="mt-2 text-sm text-gray-600">{doctor.about}</p>
            <p className="mt-2 text-blue-600 cursor-pointer">Read More</p>
          </div>
          <div className="mt-6 border-t border-gray-200">
            <h2 className="text-lg font-bold mt-4">Work Experience</h2>
            <div className="mt-2 text-sm text-gray-600">
              <FontAwesomeIcon icon={faLock} className="text-gray-600" />
              <ul className="ml-2 list-disc list-inside">
                <li>Consultant in Structural Heart Intervention in St Bartholomew’s Hospital, London</li>
                <li>Fellowship in Structural Heart Intervention in St Bartholomew’s Hospital, London</li>
                <li>Fellowship in structural heart and complex coronary intervention in Royal Brompton Hospital, London</li>
                <li>Fellowship in Electrophysiology, Blackpool Victoria Hospital, UK</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full md:w-1/3 p-6 border-t md:border-t-0 md:border-l border-gray-200 overflow-y-scroll h-screen">
          <div className="flex justify-between">
            <button className="text-gray-700">BOOK DIGITAL CONSULT</button>
            <button className="text-gray-700 border-b-2 border-blue-600">BOOK HOSPITAL VISIT</button>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold">Book Hospital Visit</h2>
            <p className="text-sm text-gray-600">₹2000</p>
            <p className="text-sm text-gray-600">Available tomorrow at 10:00 AM</p>
          </div>
          <div className="mt-4">
            <div className="flex space-x-2 overflow-x-auto">
              {dates.map(({ day, date }) => (
                <div
                  key={date}
                  className={`flex-shrink-0 text-center px-4 py-2 rounded ${selectedDate === date ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                  onClick={() => handleDateClick(date)}
                >
                  <p className="text-sm">{day}</p>
                  <p className="font-bold">{date}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-bold">MORNING SLOTS</h3>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {morningSlots.map((time) => (
                  <button
                    key={time}
                    className={`py-2 rounded ${isTimeBooked(time) ? 'bg-gray-300 text-white' : selectedTime === time ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => !isTimeBooked(time) && handleTimeClick(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <h3 className="text-sm font-bold mt-4">AFTERNOON SLOTS</h3>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {afternoonSlots.map((time) => (
                  <button
                    key={time}
                    className={`py-2 rounded ${isTimeBooked(time) ? 'bg-gray-300 text-white ' : selectedTime === time ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => !isTimeBooked(time) && handleTimeClick(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 bg-blue-600 text-white rounded" onClick={ConfirmBooking}>Confirm Booking</button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">No Booking Fees</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Call 04048215522
            </p>
          </div>
        </div>
      </div>
      {isBookingConfirmed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-6xl mb-4 animate-bounce duration-70" />
            <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-4">Your appointment has been successfully booked.</p>
            <button
              className="mt-4 py-2 px-4 bg-blue-600 text-white rounded"
              onClick={() => window.location.reload()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DoctorsDetails;
