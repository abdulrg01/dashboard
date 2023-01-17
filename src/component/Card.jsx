import DashboardIcon from '@mui/icons-material/Dashboard';

const Card = () => {
  return (
    <div className='flex bg-[#B3D9EE] py-10 w-72 rounded-lg relative'>
      <div className='flex items-center absolute top-2 left-2'>
            <DashboardIcon  className='text-rose-600'/>
            <h1 className='ml-3 font-bold text-slate-600'>Dashboard</h1>
      </div>
      <div className='absolute top-10 left-52 text-[#EB5757] text-sm w-16 buy-now flex items-center justify-center'>
        <p>Buy Now</p>
      </div>
    </div>
  )
}

export default Card