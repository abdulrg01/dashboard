import Card  from './Card';
import AccountView from './AccountView';
import DataTable from './DataTable';
import CardRed from './CardRed';
import CardSkay from './CardSkay';

const Content = () => {
  return (
    <div className='mr-10 lg:mt-0 mt-10'>
      <div className='flex flex-wrap justify-between items-center pt-14 px-7'>
         <div>
           <h1 className='text-3xl font-bold'>Welcom, Bashir Ibrahim</h1>
           <p className='text-base font-medium tracking-tight'>Manage your account and your subscriptions</p>
         </div>
         <div className='flex gap-8 flex-wrap lg:mt-0 mt-10'>
            <CardRed />
            <CardSkay />
        </div>
      </div>
      <div className='mt-5 flex flex-wrap items-center'>
         <AccountView />
          <div className='flex flex-wrap items-center lg:ml-14 ml-7 mt-6'>
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
        <div className='bg-gray-100 p-3'>
         <h1 className='pl-2 font-bold'>Deposit History</h1>
        </div>
       <DataTable />
      </div>
    </div>
  )
}

export default Content