import axios from 'axios';

export const fetchToDo = () => {
    return axios.get('/api/todo');
};

export const postToDo = (todoData) => {
    return axios.post('/api/todo', todoData)
}