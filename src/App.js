import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashbord";
import Electricity from './pages/Electricity';
import Airtime from './pages/Airtime';
import Data from './pages//Data';
import Tv from './pages//Tv'
import Transaction from './pages/Transaction';
import Setting from './pages//Setting';
import FundWallet from "./pages/FundWallet";
import Form from './component/Form';

const App = () => {
  return (
    <div>
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/electricity' element={<Electricity />} />
            <Route path='/airtime' element={<Airtime />} />
            <Route path='/data' element={<Data />} />
            <Route path='/tv' element={<Tv />} />
            <Route path='/transaction' element={<Transaction />} /> 
            <Route path='/setting' element={<Setting />} />
            <Route path='/fundWallet' element={<FundWallet />} />
            <Route path='/form' element={<Form />} />
          </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
