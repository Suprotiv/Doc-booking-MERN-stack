import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Stats from '../Components/Stats';
import Overview from '../Components/Overview';
import AdminNavbar from '../Components/AdminNavbar';

function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
         <AdminNavbar/>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`mt-[15vh] transition-all ${sidebarOpen ? 'ml-0 md:ml-[35vh]' : 'ml-0 md:ml-[15vh]'}`}>
            <Stats isOpen={sidebarOpen}/>
            <Stats isOpen={sidebarOpen}/>
            <Stats isOpen={sidebarOpen}/>
            <Stats isOpen={sidebarOpen}/>
            <Overview isOpen={sidebarOpen}/>
        </div>
      </div>
  );
}

export default Admin;