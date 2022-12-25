import React from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../pages/App.css'

const FundWallet = () => {
  return (
    <div className='flex'>
       <Sidebar />
        <div className='home-container'>
          <Navbar />
          <div className='another'>
            
          </div>
          <Footer />
        </div>
    </div>
  )
}

export default FundWallet
