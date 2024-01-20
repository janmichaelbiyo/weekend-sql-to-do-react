import axios from 'axios'
import {useState, useEffect} from 'react';
import './app.css';

import Header from '../Header/Header';
import { fetchToDo } from '../todoAPI/todo.api.js';
import AddTask from '../AddTask/AddTask.jsx';


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

  
  return (
    <div>
    <Header />
    <AddTask todoRefreshCallback={refreshToDO} />
    {todoList.map((todoData, dataIndex) => {
          return(
            <div key={dataIndex}>
              <ul>
                <li> {todoData.task} </li>
                <button> Complete </button>
                <button> Delete </button>
              </ul>
            </div>
          )
    })}

    </div>    
  );

}

export default App
