import React from 'react';

const Todo = ({ todo }) => {
  return (
    <>
      <div>
        { todo && todo.map((element, index) => (
          <div key={index}>
            <h1>{element.title}</h1>
            <p>{element.description}</p>
            <button >{element.completed==true?"completed":"marks as completed"}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
