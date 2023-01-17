import Footer from "../component/Footer"


const Airtime = () => {
  return (
    <div className='ml-10 lg:mt-3 mt-20'>
            <div className=''>
             <h1 className='font-bold text-4xl'>Airtime TopUp</h1>
             <p className='font-semibold my-2'>Below examples helps you to build your own form nice way.</p>
            </div>
            <div className='mt-6 rounded-lg w-4/6 border-2 border-slate-300 '>
              <form className='p-7' action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                  <div className="">
                   <div className='electric-input'>
                    <div className="">
                     <label htmlFor="selectPower" className="font-bold text-lg text-gray-500">
                      Network
                     </label>
                    </div>
                     <input
                        id="selectPower"
                        type="text"
                        autoComplete
                        required
                        className="w-full appearance-none rounded-xl relative 
                        border border-gray-300 px-3 py-3 
                        text-gray-900 placeholder-text-gray-900 bg-gray-50 my-3"
                        placeholder="Select Network"
                     />
                      </div>
                       <div className='absolute bottom-[435px] right-[390px]'>
                        <select className="bg-transparent">
                          <option></option>
                          <option></option>
                          <option></option>
                        </select>
                       </div>
                       <div>
                        <div className="">
                         <label htmlFor="MeterNumber" className="my-1 font-bold text-lg text-gray-500">
                           Phone Number
                         </label>
                        </div>
                        <input
                          id="MeterNumber"
                          type="text"
                          required
                          className="w-full appearance-none rounded-xl border border-gray-300 mt-2 px-3 py-3 text-gray-900 bg-gray-50"
                        />
                      </div>
                        <div className='mt-2'>
                         <div className="">
                          <label htmlFor="amount" className="my-1 font-bold text-lg text-gray-500">
                            Amount
                          </label>
                         </div>
                          <input
                            id="amount"
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

export default Airtime