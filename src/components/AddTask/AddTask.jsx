import { useState } from 'react';
import { postToDo } from '../todoAPI/todo.api';
import './AddTask.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

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
        <form onSubmit={submitTask} className="addTask">
            <label>
                <span> This is the Task: </span>
                <input id="Task" onChange={(event) => setTaskValue(event.target.value)}
                value={taskValue} />
            </label>
            <Fab size="small" color='success' type="submit"> <AddIcon /> </Fab>
            

        </form>
    );
}

export default AddTask;