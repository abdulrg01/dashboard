import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from './assets/Logo.png';
import '../pages/App.css';
import Cabon from './assets/Cabon.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import BoltIcon from '@mui/icons-material/Bolt';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = ({ children }) => {
  const menuItem =[         
            {
                Path: "/",
                name: 'Dashboard',
                icon: <DashboardIcon />
            },
            {
                Path: "/electricity",
                name: 'Purchase Electricity',
                icon: <BoltIcon />
            },
            {
                Path: "/airtime",
                name: 'Purchase Airtime',
                icon: <WifiCalling3Icon />
            },
            {
                Path: "/data",
                name: 'Purchase Data',
                icon: <WifiIcon />
            },
            {
                Path: "/tv",
                name: 'Tv Subscriptions',
                icon: <TvIcon />
            },
            {
                Path: "/transaction",
                name: 'My Transactions',
                icon: <PersonIcon />
            },
            {
                Path: "/setting",
                name: 'Account Setting',
                icon: <PersonIcon />
            },
        ]

  return (
    <div className='h-screen sidebar border-r-2'>         
        <div className='overflow-y-auto'>
          <Link to='/' className='items-center'>
            <img src={Logo} alt="logo" className='w-36 ml-12' />
          </Link>
         <div className='ml-12 my-1'>
           <h3 className='font-semibold text-base text-slate-500'>WALLET BALLANCE</h3>
           <p className='color font-semibold text-base'>$0</p>
           <div className='flex justify-between w-64'>
             <p className='font-semibold text-base text-slate-500'>Transaction</p>
             <p className='font-bold text-base'>0</p>
           </div>
         </div>
          <div className='flex ml-7'>
              <div className='bgcolor flex justify-between items-center tracking-tight text-white rounded-md px-5 py-3 font-medium'>
                  <img src={Cabon} alt="cabon" className='w-6' /> 
                    <Link to='/fundWallet'>
                     <p className='pl-2 font-semibold'>Fund Wallet <br /> With Paystack</p>
                  </Link>
              </div>
              <div className='ml-7 bgcolor-red flex justify-between items-center tracking-tight text-white rounded-md px-4 py-2 font-medium'>
                <img src={Cabon} alt="cabon" className='w-5' /> 
                  <Link to='/fundWallet'>
                    <p className='pl-2 font-semibold'>Fund Wallet <br /> With Paystack</p>
                  </Link>
              </div>
          </div>
          <div className='mt-4 font-semibold'>
          <p className='ml-12 mt-3 mb-2 font-semibold text-slate-500'>Menu</p>
          {
            menuItem.map((item, index)=>(
              <NavLink to={item.Path} key={index} 
              className='flex items-center px-7 py-2 gap-4 m-2 ml-6 rounded-3xl bg-slate-50 text-slate-500' 
              activeclassName='active'>
               <div className="icon">{item.icon}</div>
               <div className="linl_text">{item.name}</div>
              </NavLink>
            ))
          }
          </div>
          <main>{children}</main>
         <div className='flex items-center justify-between m-2 ml-14 my-5 text-xs w-52'>
            <Link to='/support'>Support</Link>
            <Link to='/faqs'>FAQS</Link>
          </div>
        </div> 
      </div>  
  )
}

export default Sidebar


