
const Register = () => {
  return (
     <div className="ml-10">
     <div className='mt-8 rounded-lg w-4/6 border-2 border-slate-300 '>
          <form className='p-7' action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
               <div className="">
               <div className='electric-input'>
               <div className="">
               <label htmlFor="selectPower" className="font-bold text-lg text-gray-500">
                 Tv Network
               </label>
               </div>
               <input
                    id="selectPower"
                    name="selectPower"
                    type="text"
                    autoComplete
                    required
                    className="w-full appearance-none rounded-xl border border-gray-300 
                      px-3 py-3 text-gray-900 placeholder-text-gray-900
                     bg-gray-50 my-3 relative"
                    placeholder="Select Bouguet"
               />
               </div>
               <div className='absolute bottom-[346px] right-[390px]'>
                 <select className='bg-transparent text-gray-500'>
                 <option></option>
                 <option></option>
                 <option></option>
                 </select>
               </div>
               <div className='electric-input-b'>
               <div className="">
                    <label htmlFor="MeterNumber" className="my-1 font-bold text-lg text-gray-500">
                      Boundle
                    </label>
               </div>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full appearance-none rounded-xl border border-gray-300
                     mt-2 px-3 py-3 text-gray-900 bg-gray-50"
                    placeholder='Select Boundle'
                    />
                 </div>
                 <div className='absolute bottom-[440px] right-[390px]'>
                  <select className="bg-transparent">
                   <option></option>
                   <option></option>
                   <option></option>
                  </select>
               </div>
               <div>
               <div className="mt-3">
                    <label htmlFor="MeterNumber" className="my-1 font-bold text-lg text-gray-500">
                      Smart Card Number
                    </label>
               </div>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full appearance-none rounded-xl border border-gray-300 mt-2 px-3 py-3 text-gray-900 bg-gray-50"
                    />
                 </div>
                </div>
               <button
                    type="submit"
                        className="py-4 px-12 mt-8 bg-[#07A4FD] rounded"
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

export default Register