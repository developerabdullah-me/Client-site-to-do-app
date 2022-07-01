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
        const url = `http://localhost:5000/myAddedItems?email=${email}`;
  
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

    return (
        <div>
            <h1 className="text-4xl text-center font-bold mt-5 mb-5"> My Added To-Do -{items.length}</h1>
            <div className='grid md:grid-cols-3 gap-7 sm:grid-cols-3 px-10'>
   { 
   items?.map(item => <SingleToDo item={item} key={item._id}  
    ></SingleToDo>)
   }
</div>
        </div>
    );
};

export default ToDo;