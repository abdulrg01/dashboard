import ElectricHome from '../component/ElectricHome';
import Footer from '../component/Footer';

const Electricity = () => {
  return (
    <div className='lg:mt-7 mt-20'>
        <div className='ml-10'>
          <h1 className='font-bold text-4xl'>Purchase Electricity</h1>
          <p className='font-semibold my-2'>Below examples helps you to build your own form nice way.</p>
        </div>
        <ElectricHome />
        <Footer />
    </div>
  )
}

export default Electricity