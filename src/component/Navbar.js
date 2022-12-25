import { useContext } from "react";
import '../pages/App.css';
import Group from "./assets/Group.png";
import Vector from "./assets/Vector (3).png";
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-3 px-7 border-b-2 border-slate-300">
      <div className="flex items-center">
        <img src={Group} alt="group" className="w-5" />
        <p className="pl-2 tracking-tighter text-xs ">Main Website...</p>
      </div>
      <div className="flex">
        <div className="flex items-center">
         <div className="p-1 rounded-3xl person">
         <img src={Vector} alt="vector" className="text-white w-4"/>
         </div>
           <div className="px-2">
             <p className="tracking-tighter text-xs">08127042744</p>
             <p className="tracking-tighter text-xs">Bashir Ibrahim</p>
           </div>
           <KeyboardArrowDownIcon className='mt-3' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
