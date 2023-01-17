import { Link } from "react-router-dom";

const Footer = () => {
 const currentYear = new Date().getFullYear();

  return (
    <div className='flex items-center justify-between p-4 px-7 border-t-2 border-slate-300'>
      <p className="text-slate-500">Dashboard / G Power @{currentYear} All Rights Reserved</p>
      <a href="/support" className="text-sky-500">support</a>
    </div>
  )
}

export default Footer
