import React from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../pages/App.css'
import Register from '../component/Register';

const Setting = () => {
  return (
    <div className='flex'>
       <Sidebar />
        <div className='home-container'>
          <Navbar />
          <div className='another'>
             <div className='ml-10 mt-1'>
              <h1 className='font-bold text-4xl'>My Profile</h1>
              <p className='font-semibold my-2'>You have full control to manage your own account setting.</p>
             </div>
             <Register />
          </div>
          <Footer />
        </div>
    </div>
  )
}

export default Setting
