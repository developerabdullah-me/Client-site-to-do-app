import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Heder = ({ children }) => {
    const [user] = useAuthState(auth);
    const handelSignOut = () => {
        signOut(auth);
     localStorage.removeItem("accessToken")

      };
    const items = (
        <>
        
          <li>
            <Link to="/completed">Completed-Tasks </Link>
          </li>
          
          <li>
            <Link to="/todo"> To-Do</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
          { user? (
     <button  className="nav-link text-red-500 font-bold hover:text-gray-700 focus:text-gray-700 p-0" onClick={handelSignOut}>
     signOut{" "}
   </button>
   ):(
    <Link to='/signUp' className="nav-link text-black hover:text-gray-700 focus:text-gray-700 p-0">SignUp</Link>
   )}

       
          </li>
        
        </>
      );
    return (
        <div>
           <div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
    {/* <!-- Navbar --> */}
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">
      <Link to="/completed">DAILY TO_DO</Link>
      
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          {/* <!-- Navbar menu content here --> */}
      {items}
        </ul>
      </div>
    </div>
    {/* <!-- Page content here --> */}
    {/* Content */}
    {children}
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      {/* <!-- Sidebar content here --> */}
      {items}
    </ul>
    
  </div>
</div>
        </div>
    );
};

export default Heder;