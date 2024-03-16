import axios from "axios"

// get all todos
export const getTodos = ()=>{
    return axios.get('https://home-take-test-backend.onrender.com/todos')
    .then(res => res.data)
    .catch(err => console.log(err))
}

// create todo
export const postTodos = (todo)=>{
    return axios.post('https://home-take-test-backend.onrender.com/todos/create',todo)
    .then(res => res.data)
    .catch(err => console.log(err))
}

// update todo
export const updateTodos = (id,todo)=>{
    return axios.patch(`https://home-take-test-backend.onrender.com/todos/update/${id}`, todo)
    .then(res => res.data)
    .catch(err => console.log(err))
}

// delete todo
export const deleteTodos = (id,)=>{
    return axios.delete(`https://home-take-test-backend.onrender.com/todos/delete/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}