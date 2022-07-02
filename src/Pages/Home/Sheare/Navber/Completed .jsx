import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SingleCompletedToDo from './SingleCompletedToDo';

const Completed  = () => {
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


    return (
        <div>
                      <div className='grid md:grid-cols-3 gap-7 sm:grid-cols-3 px-10'>
   { 
   items?.map(item => <SingleCompletedToDo item={item} key={item._id}  
  
    ></SingleCompletedToDo>)
   }
</div>
        </div>
    );
};

export default Completed ;