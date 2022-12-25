import Cabon from './assets/Cabon.png';
import { Link } from 'react-router-dom';
import Card  from './Card';
import AccountView from './AccountView';
import DataTable from './DataTable';

const Content = () => {
  return (
    <div className='mr-10'>
      <div className='flex justify-between items-center pt-14 px-7'>
         <div>
           <h1 className='text-3xl font-bold'>Welcom, Bashir Ibrahim</h1>
           <p className='text-base font-medium tracking-tight'>Manage your account and your subscriptions</p>
         </div>
         <div className='flex'>
            <div className='bgcolor flex justify-between items-center tracking-tight text-white rounded-md px-6 py-4 font-medium'>
                <img src={Cabon} alt="cabon" className='w-5' /> 
                <Link to='/fundWallet'>
                  <p className='pl-2'>Fund Wallet <br /> With Paystack</p>
                </Link>
            </div>
            <div className='ml-7 bgcolor-red flex justify-between items-center tracking-tight text-white rounded-md px-6 py-4 font-medium'>
                <img src={Cabon} alt="cabon" className='w-5' /> 
                <Link to='/fundWallet'>
                <p className='pl-2'>Fund Wallet <br /> With Paystack</p>
                </Link>
            </div>
        </div>
      </div>
      <div className='mt-5 flex items-center'>
         <AccountView />
          <div className='flex items-center ml-14 mt-6'>
            <div className='mr-2 mb-4'>
            <p className='mb-2 font-bold'>Services</p>
             <div className='mb-2'>
               <Card />
             </div>
             <div>
               <Card />
             </div>
            </div>
            <div className='mt-4'>
            <div className='mb-2 '>
               <Card />
             </div>
             <div>
               <Card />
             </div>
          </div>
         </div>
      </div>
      <div className='mx-7 mt-5'>
        <div className='bg-white p-3'>
         <h1 className='pl-2 font-bold'>Deposit History</h1>
        </div>
       <DataTable />
      </div>
    </div>
  )
}

export default Content
