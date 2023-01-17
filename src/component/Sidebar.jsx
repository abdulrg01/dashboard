import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './App.css';
import Logo from './assets/Logo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import BoltIcon from '@mui/icons-material/Bolt';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';

import { useStateContext } from '../contexts/ContextProvider';
import CardRed from './CardRed';
import CardSkay from './CardSkay';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  
  const handleCloseSidebar = () => {
    if (screenSize <= 900 ) {
      setActiveMenu(false)
    }
  }

  const itemList =[         
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
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto
      md:hover:overflow-auto pb-5'>
     {activeMenu && (<>
       <div className='flex justify-between items-center'>
         <Link to='/' className='items-center'>
           <img src={Logo} alt="logo" className='w-36 ml-4' />
         </Link>
         <div className='bg-[#07A4FD] text-white md:hidden block text-xs p-1 rounded-full mr-5'>
           <MenuIcon onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} /> 
         </div>
       </div>
       <div className='mt-2 ml-4'>
         <h3 className='font-semibold text-base text-slate-500'>WALLET BALLANCE</h3>
         <p className='font-semibold text-base my-1'>$0</p>
         <div className='flex justify-between w-64'>
           <p className='font-semibold text-base text-slate-500'>Transaction</p>
           <p className='font-bold text-base mr-2'>0</p>
         </div>
       </div>
       <div className='flex gap-6 ml-2 mt-3'>
        <CardRed />
        <CardSkay />
       </div>
         <div className='mt-4 font-semibold'>
          <p className='ml-12 mt-3 mb-2 font-semibold text-slate-500'>Menu</p>
           {
            itemList.map((list, index) => (
              <NavLink to={list.Path} key={index} onClick={handleCloseSidebar}
                className='flex items-center px-7 py-2 gap-4 m-2 ml-6 rounded-3xl bg-white text-slate-500' 
                activeclassname='active'>
                <div className="icon">{list.icon}</div>
                <div className="linl_text">{list.name}</div>
              </NavLink>
             ))
           }
         </div>
         <div className='flex items-center justify-between ml-14 mt-3 text-xs w-52'>
            <Link to='/support'>Support</Link>
            <Link to='/faqs'>FAQS</Link>
          </div>
     </>)}
   </div>
  )
}

export default Sidebar