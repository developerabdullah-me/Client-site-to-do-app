import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {


    const { Id } = useParams();
  const [ToDo, setToDo] = useState({});
  const [NewToDo, setNewToDo] = useState()
  const {date,description,hedLine,_id} = ToDo;

  useEffect(() => {
    fetch(`http://localhost:5000/update/${Id}`)
      .then(res => res.json())
      .then(data =>{ 
          
        setToDo(data) 
        setNewToDo(data.description)
    });
  }, []);

  const handleQuantityUpdate = event => {
    event.preventDefault()

    const restock = event.target.restock.value

    const updatedData =  restock + NewToDo
    setNewToDo(updatedData)
    const url = `http://localhost:5000/update/${Id}`

    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ updatedData })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        // alert('quantity updatted')
    })
event.target.reset()
}

    return (
        <div>
           
        
           <div>
      <div className="shadow-lg w-80  mx-auto p-5 mb-7">
        <div className=" ">
        
          <div className="text-center">
            <h1>hedLine {hedLine} </h1>
            <p> description: {description}</p>
            {/* <p>price:{description}</p> */}

            <form onSubmit={handleQuantityUpdate}>
            <textarea className="w-24 py-3 mr-2 bg-slate-300"  type="text"  name='restock' placeholder='up date' required/>
            <button className="btn">Added</button>
            </form>

          </div>
        </div>
        
      </div>
    </div>


        </div>
    );
};

export default Update;