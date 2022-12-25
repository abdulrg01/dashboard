import React from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../pages/App.css'
import ElectricHome from '../component/ElectricHome';

const Electricity = () => {
  return (
    <div className='flex bg-slate-700'>
       <Sidebar />
        <div className='home-container'>
          <Navbar />
          <div className='another'>
           <div className='ml-10 mt-10'>
             <h1 className='font-bold text-4xl'>Purchase Electricity</h1>
             <p className='font-semibold my-2'>Below examples helps you to build your own form nice way.</p>
           </div>
           <ElectricHome />
          </div>
          <Footer />
        </div>
    </div>
  )
}

export default Electricity
