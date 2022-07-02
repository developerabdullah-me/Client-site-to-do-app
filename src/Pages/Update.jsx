import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {


    const { Id } = useParams();
  const [ToDo, setToDo] = useState({});
  const [NewToDo, setNewToDo] = useState()
  const {date,description,hedLine,_id} = ToDo;

  useEffect(() => {
    fetch(`https://tragically-drake-33182.herokuapp.com/update/${Id}`)
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
    const url = `https://tragically-drake-33182.herokuapp.com/update/${Id}`

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
      <div className="shadow-lg w-3/4  mx-auto p-5 mb-7">
        <div className=" ">
        
          <div className="text-center">
            {/* <h1>hedLine {hedLine} </h1>
            <p> description: {description}</p> */}
            {/* <p>price:{description}</p> */}

            <form onSubmit={handleQuantityUpdate}>
            <textarea className="w-2/3 py-3 mr-2 bg-slate-300"  type="text"  name='restock' placeholder='up date' required/>
            <br />
            <button className="btn">Update</button>
            </form>

          </div>
        </div>
        
      </div>
    </div>


        </div>
    );
};

export default Update;