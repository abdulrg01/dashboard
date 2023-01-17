import Logo from './assets/Logo.png';
import Group from './assets/Group-i.png';
import Vector from './assets/Vector (4).png';
import '../pages/App.css';

export default function Example() {
  return (
      <div className="flex w-full min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-10">
        <div className="w-full max-w-md space-y-8">
          <img src={Logo} alt="logo" className='mx-auto h-14 w-36' />
          <form className="bg-white mt-8 py-5 px-10 space-y-4" action="#" method="POST">
           <h1 className="pt-4 text-2xl font-bold tracking-tight text-gray-900">Sign-in</h1>
           <p className="tracking-tight text-sm text-slate-600">Access the G power panel using your email and password.</p>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                    <label htmlFor="email-address" className="font-bold text-xs">
                     Email
                    </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input-placeholder relative w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-text-gray-900 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-gray-50 mt-1"
                  placeholder="Email"
                />
              </div>
              <div>
              <div className="text-sm flex items-center justify-between mt-5">
                <label htmlFor="password" className="font-bold text-xs">
                  Password
                </label>
                <a href="#" className="font-normal text-xs text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="input-vector w-full appearance-none rounded-lg border border-gray-300 mt-1 px-3 py-2 text-gray-900 placeholder-text-gray-900 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-gray-50"
                  placeholder="Password"
                />
                <div className='vector'>
                  <img src={Vector} alt="vector" className='w-4' />
                  </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group rounded-full w-full p-2 mt-3"
              >
                <span className="flex justify-center items-center text-white pl-3 font-semibold">
                  Sign in
                </span>
              </button>
              <div className="mt-4 flex flex-col gap-y-4 items-center justify-center">
                <p>Or</p>
                <a href=""><img src={Group} alt="group" className='w-32'/></a>
                <p className='font-medium text-sm text-gray-900 pb-4'>New on our platForm? <a href="" className="text-indigo-600">Create an account</a></p>
              </div>
              </div>
          </form>
        </div>
      </div>
  )
}