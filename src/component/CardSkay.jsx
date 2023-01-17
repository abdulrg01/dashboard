import React from 'react';
import { Link } from 'react-router-dom';
import Logo2 from './assets/Logo2.png';

const CardSkay = () => {
  return (
    <div>
      <div className='bg-[#07A4FD] flex justify-between items-center tracking-tight text-white rounded-md px-4 py-3'>
       <img src={Logo2} alt="cabon" className='w-6' /> 
        <Link to='/fundWallet'>
          <p className='pl-2 text-[10px] font-medium text-white'>Fund Wallet <br /> With Paystack</p>
        </Link>
      </div>
    </div>
  )
}

export default CardSkay