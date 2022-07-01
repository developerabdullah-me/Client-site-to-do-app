import React from 'react';

const SingleToDo = (props) => {
    const {date,description,hedLine}=props.item;
    return (
        <div>
            <div className='shadow-lg'>
                <h1>{hedLine}</h1>
              <p>{description}</p>
            <p className='font-bold'>{date}</p>
            </div>
        </div>
    );
};

export default SingleToDo;