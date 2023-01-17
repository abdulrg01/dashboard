import Footer from '../component/Footer';
import Register from '../component/Register';

const Tv = () => {
  return (
    <div className=''>
        <div className='ml-10 lg:mt-3 mt-20'>
          <h1 className='font-bold text-4xl'>TV TopUp</h1>
          <p className='font-semibold my-2'>Renew your TV subscription here.</p>
        </div>
        <Register />
        <Footer />
    </div>
  )
}

export default Tv