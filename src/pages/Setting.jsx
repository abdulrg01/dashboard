import Footer from '../component/Footer';
import Register from '../component/Register';

const Setting = () => {
  return (
    <div className=''>
        <div className='ml-10 lg:mt-3 mt-20'>
          <h1 className='font-bold text-4xl'>My Profile</h1>
          <p className='font-semibold my-2'>You have full control to manage your own account setting.</p>
        </div>
        <Register />
        <Footer />
    </div>
  )
}

export default Setting