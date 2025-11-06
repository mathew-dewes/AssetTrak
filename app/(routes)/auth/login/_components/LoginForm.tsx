import Link from "next/link";

export default function LoginForm() {


  return <form className="max-w-sm mx-auto mt-10">
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
      <input type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
    </div>
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
      <input type="password" id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
    </div>

    <div className="flex items-start mb-5">
      <div className="flex items-center h-5">
        <input id="terms" type="checkbox" value="" className="w-4 h-4 border accent-violet-600 border-gray-300 rounded-sm bg-gray-50" required />
      </div>
      <label className="ms-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-violet-600 hover:underline ">terms and conditions</a></label>
    </div>
    <p id="helper-text-explanation" className="my-2 text-sm text-gray-500 dark:text-gray-400">Don’t have an account? Click on Register to create one</p>
    <div className="flex gap-5 mt-5">
      <button type="submit" className="text-white bg-acccent-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none cursor-pointer focus:ring-emerald-300 font-medium rounded-lg text-sm w-full py-2.5 text-center">Login</button>
      <Link className="text-white bg-acccent-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none cursor-pointer focus:ring-emerald-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center" href={'/auth/register'}>Register</Link>

    </div>

  </form>

}