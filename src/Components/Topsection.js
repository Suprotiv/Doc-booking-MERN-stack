import React from 'react';

function Topsection() {
  return (
    <main className="p-4 md:py-[8vh] grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50">
    <div className="card bg-white p-4 rounded shadow text-center hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
        <img src="/find-a-doctor-card.jpg" alt="Our Doctors" className="mx-auto mb-4 hover:opacity-50 transition-all duration-300"/>
        <h2 className="text-xl font-bold mb-2">Our Doctors</h2>
        <p>Search by name, specialty, location, and more.</p>
        <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded">Find a doctor</button>
    </div>
    <div className="card bg-white p-4 rounded shadow text-center hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
        <img src="/locations-card.jpg" alt="Locations & Directions" className="mx-auto mb-4 hover:opacity-50 transition-all duration-300"/>
        <h2 className="text-xl font-bold mb-2">Locations & Directions</h2>
        <p>Find any of our 300+ locations.</p>
        <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded">Get directions</button>
    </div>
    <div className="card bg-white p-4 rounded shadow text-center hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
        <img src="/appointments-card.jpg" alt="Appointments" className="mx-auto mb-4 hover:opacity-50 transition-all duration-300"/>
        <h2 className="text-xl font-bold mb-2">Appointments</h2>
        <p>Get the in person or virtual care you need.</p>
        <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded">Schedule now</button>
    </div>
    </main>
  );
}

export default Topsection;
