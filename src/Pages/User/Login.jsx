import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate,useLocation } from 'react-router-dom';

// import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import auth from '../../firebase.init';
const Login = () => {

    const emailRef=useRef('')
    const passwordRef=useRef('')
    const location=useLocation()
   const navigate=useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, resetPasswordError] = useSendPasswordResetEmail(
        auth
      );
      let from = location.state?.from?.pathname || "/";
      
      if(user){
        // navigate(from, { replace: true });
      }

    const handleLogin = async( event )=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        await signInWithEmailAndPassword(email,password)
        const {data} = await axios.post('https://tragically-drake-33182.herokuapp.com/login', {email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }
    const handelResetPassword=async (event) => {
      event.preventDefault();
      const email=emailRef.current.value;
     if(email){
      await sendPasswordResetEmail(email)
      toast.error('sending reset password success')
     }
     else{
       toast.error('place valid email')
     }
    }
    return (
        <div>
          <ToastContainer/>
            <div className=" mx-auto">
       
       <h1 className='text-center'>please login</h1>
      
       <div className ='mx-auto'>
             <div className ='text-center'>
            
        {/* <SocialLogin></SocialLogin> */}
             </div>
             
          <div>
           
            <div className="flex items-center justify-center placeholder-red-300">
            <div className="h-1 bg-slate-700 w-28 rounded "></div>
             <p className="px-2">or</p>
             <div className="h-1 bg-slate-700 w-28 rounded "></div>
           
           </div>
         </div>
       <form onSubmit={handleLogin}>
        
         <input
          ref={emailRef} className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="email" name="email" placeholder="type your email" required/>
         <input
          ref={passwordRef} className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="password" name="password" placeholder="type your password" required/>
         <input
          className='block btn my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto'  type="submit" value="Login" />
       </form>
      
       </div>
       <button className="mx-auto block outline-none text-red-500"
        onClick={handelResetPassword}>
        Reset password
      </button>
       <div className='pt-2 font-medium text-center'>
      <p> first time registration ?   <Link to='/register' className='border-b'>please register </Link></p>
       </div>
       
     </div>
        </div>
    );
};

export default Login;