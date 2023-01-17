import Group from "./assets/Group.png";
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { useStateContext } from '../contexts/ContextProvider';
import { useEffect } from "react";

const Navbar = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    handleResize();
  
    return () => window.removeEventListener('resize', handleResize); 

  }, [screenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize]);
  
   
  return (
    <div className="relative bg-white border-b-2 border-gray-300">
      <div className='flex justify-between items-center p-3 md:mx-6'>
        <div className='bg-[#07A4FD] text-white md:hidden block text-xs p-1 rounded-full mr-5'>
            <MenuIcon onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} /> 
        </div>
        <div className="flex items-center">
          <img src={Group} alt="group" className="w-5" />
          <p className="pl-2 tracking-tighter text-xs ">Main Website...</p>
        </div>
        <div className="flex">
          <div className="flex items-center">
          <div className="rounded-3xl bg-[#FF0000]">
            <PersonIcon className="text-white w-2" />
          </div>
            <div className="px-2">
              <p className="tracking-tighter text-xs">08127042744</p>
              <p className="tracking-tighter text-xs">Bashir Ibrahim</p>
            </div>
            <select className="bg-transparent mt-2">
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar