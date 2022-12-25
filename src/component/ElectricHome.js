import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../pages/App.css';

const ElectricHome = () => {
  return (
     <div className="ml-10 mt-7">
          <div className='mt-11 rounded-lg w-4/6 border-2 border-slate-300 '>
               <form className='p-7' action="#" method="POST">
                 <input type="hidden" name="remember" defaultValue="true" />
                    <div className="">
                    <div className='electric-input'>
                    <div className="">
                    <label htmlFor="ePower" className="font-bold text-lg text-gray-500">
                      Select Available Power service
                    </label>
                    </div>
                    <input
                         id="ePower"
                         type="text"
                         autoComplete
                         required
                         className="w-full appearance-none rounded-xl border border-gray-300 px-3 py-3 text-gray-900 placeholder-text-gray-900 bg-gray-50 my-3"
                         placeholder="Select Power"
                    />
                    </div>
                    <div className='arrowDown'>
                       <select>
                         <option></option>
                         <option></option>
                         <option></option>
                       </select>
                    </div>
                    <div>
                    <div className="">
                         <label htmlFor="eNumber" className="my-1 font-bold text-lg text-gray-500">
                          Meter Number
                         </label>
                    </div>
                         <input
                         id="eNumber"
                         type="text"
                         required
                         className="w-full appearance-none rounded-xl border border-gray-300 mt-2 px-3 py-3 text-gray-900 bg-gray-50"
                         />
                      </div>
                     </div>
                    <button
                         type="submit"
                         className="py-4 px-12 mt-8 buttom-bg rounded"
                    >
                         <span className="text-white font-bold">
                           Get Meter Info
                         </span>
                    </button>
                 </form>
             </div>
          </div>
  )
}

export default ElectricHome
