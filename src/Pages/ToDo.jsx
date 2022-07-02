import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import axios from 'axios';
import SingleToDo from './SingleToDo';
const ToDo = () => {
   
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();


    
    useEffect(() => {
      const myToDo = async () => {
        const email = user.email;
        const url = `https://tragically-drake-33182.herokuapp.com/myAddedItems?email=${email}`;
  
        try {
          const { data } = await axios.get(url, {
            headers: {
              authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          setItems(data);
        } catch (error) {
          console.log(error.message);
          if (error.response.status === 401 || error.response.status === 403) {
            signOut(auth);
            navigate("/login");
          }
        }
      };
      myToDo();
    }, [user]);


    // delete
    const [ToDo, setToDo] = useState();
    // console.log(product);
  
    const deleteHandleToDo = (id) => {
      const proceed = window.confirm("Are you sure?");
  
      if (proceed) {
        const url = `https://tragically-drake-33182.herokuapp.com/toDoDelete/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = ToDo.filter((ToDo) => ToDo._id !== id );
          setToDo(remaining);
          });
      }
    };
  
    return (
        <div>
            <h1 className="text-4xl text-center font-bold mt-5 mb-5"> My Added To-Do -{items.length}</h1>
            <div className='grid md:grid-cols-3 gap-7 sm:grid-cols-3 px-10'>
   { 
   items?.map(item => <SingleToDo item={item} key={item._id}  
    deleteHandleToDo={deleteHandleToDo}
    ></SingleToDo>)
   }
</div>
        </div>
    );
};

export default ToDo;