import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { useAuthState } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Calender = () => {
    const [selectedDay, setSelectedDay] = useState(new Date()) ;

    const footer = selectedDay ? (
      <p>You selected {format(selectedDay, 'PPPP')}.</p>
    ) : (
      <p>Please pick a day.</p>
    );
// const users={
// const email = useState
// }


    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
      console.log(data);
      const url=`https://tragically-drake-33182.herokuapp.com/todoService?=${selectedDay}`
      fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    
    toast.success('Success',data)
   
  })
  
    }
    return (
        <div className="md:flex mt-24  gap-20 px-28 ">
     <div>
     <DayPicker
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
    />  
     </div>
     <form className=' grid justify-center shadow-lg md:w-1/3 mx-auto py-6' onSubmit={handleSubmit(onSubmit)}>
     <input className='mb-5 outline-none w-72 outline-gray-900 py-3 px-2 ' placeholder='Hed line' {...register("hedLine" )} required/>

      <input className='mb-5 block outline-none w-72 outline-gray-900 py-3 px-2 ' value={user.email} placeholder='email' type="email" {...register("email")}required />

      <input className='mb-5 block outline-none w-72 outline-gray-900 py-3 px-2 ' 
      value={selectedDay}
      placeholder='date' type="text" {...register("date")}  required/>
     
      <textarea className='mb-5 block outline-gray-900 w-72 h-12 border-2 outline-none' placeholder='description' {...register("description", )} required/>

      <input className='mb-5 block cursor-pointer btn w-72 py-3 px-2 ' value='Add Now' type="submit" />
    </form>
    
        </div>
    );
};

export default Calender;