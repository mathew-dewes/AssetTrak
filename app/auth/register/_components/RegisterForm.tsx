import Link from "next/link";

export default function RegisterForm(){
    

return <form className="max-w-sm mx-auto mt-10">
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900">First name</label>
    <input type="text" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="First name" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
    <input type="text" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Last name" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
    <input type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
  <label className="block mb-2 text-sm font-medium text-gray-900">Select your business unit</label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">

    <option>Mobile</option>
    <option>Canada</option>
    <option>France</option>
    <option>Germany</option>
  </select>
  </div>

  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900">Create password</label>
    <input type="password" id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 ">Repeat password</label>
    <input type="password" id="repeat-password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border accent-violet-600 border-gray-300 rounded-sm bg-gray-50" required />
    </div>
    <label className="ms-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-violet-600 hover:underline ">terms and conditions</a></label>
   </div>
    <p id="helper-text-explanation" className="my-2 text-sm text-gray-500 dark:text-gray-400">Already have have an account? Click on Login to navigate to the login page</p>

     <div className="flex gap-5 mt-5">
      <button type="submit" className="text-white bg-acccent-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none cursor-pointer focus:ring-emerald-300 font-medium rounded-lg text-sm w-full py-2.5 text-center">Register</button>
      <Link className="text-white bg-acccent-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none cursor-pointer focus:ring-emerald-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center" href={'/auth/login'}>Login</Link>

    </div>
 </form>

}