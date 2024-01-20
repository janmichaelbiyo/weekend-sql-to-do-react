import { useState } from 'react';
import { postToDo } from '../todoAPI/todo.api';

function AddTask(props) {
    const [taskValue, setTaskValue] = useState('');

    const submitTask = (event) => {
        event.preventDefault();
        console.log('This is what we are submitting', {
            task: taskValue,
        });
        postToDo({
            task: taskValue,
        })
        .then((response) => {
            props.todoRefreshCallback();

            setTaskValue('');
        })
        .catch((error) => {
            console.log('This is a problem with the post', error);
        });
    };

    return (
        <form onSubmit={submitTask}>
            <label>
                <span> This is the Task: </span>
                <input id="Task" onChange={(event) => setTaskValue(event.target.value)}
                value={taskValue} />
            </label>
            <button type="submit"> SUBMIT </button>
            

        </form>
    );
}

export default AddTask;