import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillDelete } from 'react-icons/ai';
import { GrDocumentUpdate } from 'react-icons/gr';
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from '../firebase.init';



const SingleToDo = (props) => {
  const {item,deleteHandleToDo}= props;
  const { date, description, hedLine, _id, email } =item;
  const navigate = useNavigate();

  const handelUpdate = (id) => {
    navigate(`/upDate/${_id}`);
  };


  const addCompleted = () => {

    fetch(`https://tragically-drake-33182.herokuapp.com/tasks/completed/${email}`, {
        method: "PUT",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 403) {
                toast.error('Failed to add completed.')
            }
            return res.json()
        })
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success('Successfully add completed')
            }
        })
}


  return (
    <div>
      <div className='shadow-lg px-4 pt-4'>
   
                <h1>{hedLine}</h1>
              <p>{description}</p>
            <p className='font-bold'>{date}</p>
            <div className=" flex justify-center gap-9 p-4">

            <button onClick={()=>deleteHandleToDo(item._id)}><AiFillDelete/></button>

             <button onClick={() =>handelUpdate(_id)} className="  rounded"><GrDocumentUpdate className="text-center"/></button>

            <input onClick={addCompleted}  type="radio" name="done" className='w-5 h-5 rounded-full' />
            </div>
            </div>

      
    </div>
  );
};

export default SingleToDo;
