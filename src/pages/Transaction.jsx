import DataTable from '../component/DataTable';
import Footer from '../component/Footer';
import '../component/App.css';

const Transaction = () => {
  return (
    <div className=''>
      <div className='grow'>
        <div className='ml-10 lg:mt-5 mt-20'>
          <h1 className='font-bold text-4xl'>Transaction History</h1>
          <p className='font-semibold my-2'>Transaction you've made so far.</p>
        </div>
        <div className='mx-10 mt-7'>
          <div className='bg-gray-100 p-3'>
            <h1 className='pl-2 font-bold'>Deposit History</h1>
          </div>
          <DataTable />
        </div>
        </div>
    </div>
  )
}

export default Transaction