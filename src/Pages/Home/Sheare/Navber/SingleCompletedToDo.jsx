import React from 'react';

const SingleCompletedToDo = (props) => {
    const {item}= props;
    const { date, description, hedLine, _id, email,role} =item;
    return (
        <div>
            { role && <>
                <h1>{hedLine}</h1>
              <p>{description}</p>
            <p className='font-bold'>{date}</p>
            </>
            
            }
           
        </div>
    );
};

export default SingleCompletedToDo;
