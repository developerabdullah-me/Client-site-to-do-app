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
  const [done, setDone] = useState(false);

  const toDoInputForCompleted = {
    id: _id,
    email: email,
    date: date,
    title: hedLine,
    content: description,
  };

  const handlePostToDo = (data) => {
    const url=`http://localhost:5000/todoService?=${toDoInputForCompleted}`
        // const url=`http://localhost:5000/todoService.?=${toDoInputForCompleted}`
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

  //   axios
  //     .post(`http://localhost:5000/todoService?=${toDoInputForCompleted}`)
  //     .then((res) => {
  //       const { data } = res;
  //       if (data?.insertedId) {
  //         toast.success(
  //           "Your To-Do added in completed task page successfully."
  //         );
  //       } else {
  //         toast.error(
  //           "Faild to added your To-Do in completed taks. Please try again."
  //         );
  //       }
  //     });
  };




 





  return (
    <div>
      <div className='shadow-lg px-4 pt-4'>
   
                <h1>{hedLine}</h1>
              <p>{description}</p>
            <p className='font-bold'>{date}</p>
            <div className=" flex justify-center gap-9 p-4">

            <button onClick={()=>deleteHandleToDo(item._id)}><AiFillDelete/></button>

             <button onClick={() =>handelUpdate(_id)} className="  rounded"><GrDocumentUpdate className="text-center"/></button>

            <input onClick={() => handlePostToDo(setDone(!done))} type="checkbox" name="done" className='w-5 h-5 rounded-full' />
            </div>
            </div>

      
    </div>
  );
};

export default SingleToDo;
