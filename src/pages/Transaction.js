import React from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../pages/App.css'
import DataTable from '../component/DataTable';

const Transaction = () => {
  return (
    <div className='flex'>
       <Sidebar />
        <div className='home-container'>
          <Navbar />
          <div className='another'>
            <div className='ml-10 mt-5'>
             <h1 className='font-bold text-4xl'>Transaction History</h1>
             <p className='font-semibold my-2'>Transaction you've made so far.</p>
            </div>
             <div className='mx-10 mt-5'>
              <div className='bg-white p-3'>
                <h1 className='pl-2 font-bold'>Deposit History</h1>
              </div>
              <DataTable />
             </div>
          </div>
          <Footer />
        </div>
    </div>
  )
}

export default Transaction
