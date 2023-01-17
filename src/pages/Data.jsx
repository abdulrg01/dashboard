import Footer from "../component/Footer"

const Data = () => {
  return (
    <div className=''>
             <div className='ml-10 lg:mt-3 mt-20'>
              <h1 className='font-bold text-4xl'>Data TopUp</h1>
              <p className='font-semibold my-2'>Renew your data subscription here.</p>
             </div>
             <div className='ml-10 mt-6 mb-3 overflow-y-auto rounded-lg w-4/6 border-2 border-slate-300 '>
              <form className='p-7' action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                  <div className="">
                   <div className='electric-input'>
                    <div className="">
                     <label htmlFor="data" className="font-bold text-lg text-gray-500">
                      Network
                     </label>
                    </div>
                     <input
                        id="data"
                        type="text"
                        autoComplete
                        required
                        className="w-full appearance-none rounded-xl border relative 
                        border-gray-300 px-3 py-3 text-gray-900 
                        placeholder-text-gray-900 bg-gray-50 my-3"
                        placeholder="Select Network"
                     />
                      </div>
                       <div className='absolute bottom-[445px] right-[360px]'>
                        <select className="bg-transparent">
                          <option></option>
                          <option></option>
                          <option></option>
                        </select>
                       </div>
                       <div>
                        <div className="">
                         <label htmlFor="dataNumber" className="my-1 font-bold text-lg text-gray-500">
                           Boundle
                         </label>
                        </div>
                        <input
                          id="dataNumber"
                          type="text"
                          required
                          className="w-full data appearance-none rounded-xl border 
                          border-gray-300 mt-2 px-3 py-3 text-gray-900 
                          bg-gray-50 relative"
                          placeholder='Select Boundle'
                        />
                      </div>
                      <div className='absolute bottom-[345px] right-[360px]'>
                        <select className='bg-transparent'>
                          <option></option>
                          <option></option>
                          <option></option>
                        </select>
                       </div>
                        <div className='mt-4'>
                         <div className="">
                          <label htmlFor="dataNumber" className="my-1 font-bold text-lg text-gray-500">
                            Phone Number
                          </label>
                         </div>
                          <input
                            id="dataNumber"
                            type="password"
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
             <Footer />
          </div>
  )
}

export default Data