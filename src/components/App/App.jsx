import axios from 'axios'
import {useState, useEffect} from 'react';
import './App.css';

import Header from '../Header/Header';
import { fetchToDo, deleteToDo, updateToDo } from '../todoAPI/todo.api.js';
import AddTask from '../AddTask/AddTask.jsx';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';


function App () {
      const [todoList, setTodoList] = useState([]);

 const refreshToDO = () => {
        const todoListPromise = fetchToDo();
        todoListPromise
       
        .then((response) => {
          console.log('this is my server data', response);
          setTodoList(response.data);
        })
        .catch((error) => {
          console.log('Thier is a mistake here on the Get side', error);
        });

 };     

useEffect(() => {
  console.log('This is your ToDo list');
  refreshToDO();
}, []); 

const handleClickDelete = (todoDataId) => {
    console.log('this is the task id we want gone', todoDataId);
    deleteToDo(todoDataId)
    .then((response) => {
      refreshToDO();
    }) 
    .catch((error) => {
      console.log('this is delete error', error);
    });
};

const handleClickUpdate = (todoDataId) => {
    updateToDo(todoDataId)
        .then((response) => {
          refreshToDO();
        })
        .catch((error) => {
          console.log('this is the problem with the update', error);
        });
}
  
  return (
    <div>
    <Header />
    <AddTask todoRefreshCallback={refreshToDO} />
    <Grid container spacing={2}>
    {todoList.map((todoData, dataIndex) => {
          return(
            <div key={dataIndex}>
              <Grid xs={12}>
              <ul>
                <li> {todoData.task} </li>
                <p className={`todo ${
                  todoData.is_complete ? 'Yes' : 'No'
                }`}>Complete?: {todoData.is_complete ? 'Yes' : 'No'}  </p>
                <button onClick={(event) => handleClickUpdate(todoData.id)}> Complete </button>
                <button onClick={(event) => handleClickDelete(todoData.id)}> Delete </button>
              </ul>
              </Grid>
            </div>
          )
    })}
    </Grid>
    </div>    
  );

}

export default App
