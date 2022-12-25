import React from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../pages/App.css'
import Register from '../component/Register';

const Tv = () => {
  return (
    <div className='flex'>
       <Sidebar />
        <div className='home-container'>
          <Navbar />
          <div className='another'>
             <div className='ml-10 mt-1'>
              <h1 className='font-bold text-4xl'>TV TopUp</h1>
              <p className='font-semibold my-2'>Renew your TV subscription here.</p>
             </div>
             <Register />
          </div>
          <Footer />
        </div>
    </div>
  )
}

export default Tv
