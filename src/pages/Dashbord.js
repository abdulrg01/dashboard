import React from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../pages/App.css'
import Content from '../component/Content';

const Dashbord = () => {
  
  return (
    <div className='flex'>
       <Sidebar />
        <div className='home-container'>
          <Navbar />
          <div className='content'>
             <Content />
          </div>
          <Footer />
        </div>
    </div>
  )
}

export default Dashbord
