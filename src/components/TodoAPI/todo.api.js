import axios from 'axios';

export const fetchToDo = () => {
    return axios.get('/api/todo');
};

export const postToDo = (todoData) => {
    return axios.post('/api/todo', todoData)
};

export const deleteToDo = (todoDataId) => {
    return axios.delete(`/api/todo/${todoDataId}`);
};

export const updateToDo = (todoDataId) => {
    return axios.put(`/api/todo/${todoDataId}`);
}
