import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Form, Sidebar, Navbar } from './component';
import { Dashboard, Airtime, Data, Electricity, FundWallet, Setting, Transaction, Tv } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {

  const { activeMenu } = useStateContext();

  return (
    <div>
       <BrowserRouter>
        <div className='flex relative'>
          {activeMenu ? (
              <div className='w-[320px] fixed sidebar'>
                  <Sidebar />
              </div>
          ) : (
              <div className='w-0'>
                  <Sidebar />
              </div>
          )}
          <div className={
              `min-h-screen w-full ${activeMenu ?
              'md:ml-[320px]' : 'flex-2'}`
          }>
            <div className='fixed w-full md:static navbar'>
                  <Navbar />   
            </div> 

          <div>
           <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path='/electricity' element={<Electricity />} />
              <Route path='/airtime' element={<Airtime />} />
              <Route path='/data' element={<Data />} />
              <Route path='/tv' element={<Tv />} />
              <Route path='/transaction' element={<Transaction />} /> 
              <Route path='/setting' element={<Setting />} />
              <Route path='/fundWallet' element={<FundWallet />} />
              <Route path='/form' element={<Form />} />
            </Routes>
          </div>
         </div>
        </div>  
      </BrowserRouter>
    </div>
  )
}

export default App