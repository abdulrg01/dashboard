import '../pages/App.css';

const AccountView = () => {
  return (
    <div className='ml-7 w-64'>
          <h1 className='text-sm mb-2 font-semibold'>Account Overview</h1>
           <div className='account-bg text-slate-300 p-4'>
                <p className='text-sm text-color'>Your eBank Details</p>
                <div className='my-2 text-white font-bold tracking-wide'>
                    <p>Zenith Bank</p>
                    <p>Bash</p>
                    <p>0987654321</p>
                </div>
                <p className='text-color pb-2 text-xs'>Account is instantly credited on<br />transper</p>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-sm text-color font-medium'>Wallets</p>
                    <p className='text-base mt-2 text-white font-semibold'>$0</p>
                    </div>
                    <div>
                    <p className='text-sm text-color font-medium'>Deposits</p>
                    <p className='text-base mt-2 text-white font-semibold'>0</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountView
