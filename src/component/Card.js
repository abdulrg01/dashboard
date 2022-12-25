import DashboardIcon from '@mui/icons-material/Dashboard';
import '../pages/App.css';

const Card = () => {
  return (
    <div className='flex card-bg py-8 w-72 rounded-lg'>
      <div className='flex items-center icon-dashboard'>
            <DashboardIcon  className='text-rose-600'/>
            <h1 className='ml-3 font-bold text-slate-600'>Dashboard</h1>
      </div>
      <div className='bg-pink-200 text-rose-400 text-sm w-16 buy-now flex items-center justify-center'>
        <p>Buy Now</p>
      </div>
    </div>
  )
}

export default Card
