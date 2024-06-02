import React, { useState } from 'react';

const CreateTodo = ({ todo, setTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTask = () => {
        fetch('http://localhost:1000/create', {
            method: "post",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(async (response) => {
            const json = await response.json();
            
        })
        .then(() => {
            // Update the todo state after successfully adding a task
            setTodo([...todo, {
                title: title,
                description: description
            }]);
            // Clear the input fields
            setTitle("");
            setDescription("");
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <input
                id="title"
                style={{ padding: "10px", margin: "10px" }}
                type="text"
                className="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)} placeholder='title'
            />
            <input
                id="desc"
                style={{ padding: "10px", margin: "10px" }}
                type="text"
                className="description"
                value={description}
                onChange={(e) => setDescription(e.target.value) } placeholder='discription'
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default CreateTodo;
