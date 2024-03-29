import { useEffect, useState } from "react";
import { TodoCart } from "../components/TodoCard";

import "../App.css"
import styled from "styled-components";
import { deleteTodos, getTodos, postTodos, updateTodos } from "../actions";


export type TODOS = {
    title: string;
    status: boolean;
    _id: number;
    sr?:number;
    editTodo?: () => void; 
    deleteTodo?: () => void; 
};

export type todo = {
    title:string
}
export type updateTodo = {
    status:boolean
}

const Home:React.FC = () => {
    const [todos, setTodos] = useState<TODOS[]>([]);

    const[title, setTitle] = useState<string>("");
    const [ render , setRender]= useState<boolean>(false);

    const editTodo = (id: number,status:boolean) => {
        const updatedTodo = {status: status? false : true}
        updateTodos(id,updatedTodo).then(res => setRender(!render))
        
    };
    const deleteTodo = (id: number) => {
        deleteTodos(id).then(res => setRender(!render))
    };

    const submitNewTodo=(e: any)=>{
        e.preventDefault();
        if(title === ""){
            return alert("Please enter Your title")
        }else{
            const newTodo:todo = { title }
            postTodos(newTodo).then(res => {
                setTitle("");
                setRender(!render)
            })  
        }  
    }

    useEffect(()=>{
        getTodos().then(res => setTodos(res));
    },[render]);
    
    return (
        <DIV>
            <h1>My Todos</h1>
            <div className="todoBox">
                <div className="createBox">
                    <input type="text"  placeholder="Enter Title" value={title} onChange={(e)=> setTitle(e.target.value) }/>
                    <button onClick={submitNewTodo} data-testid="todo-create">Create</button>
                </div>
                <div >
                <hr />
                  {todos?.length > 0 &&
                        todos?.map((item, i) => (
                            <TodoCart key={item._id} _id={item._id} sr={i+1}
                               title={item.title}  status={item.status}
                               editTodo={() => editTodo(item._id,item.status)}
                               deleteTodo={() => deleteTodo(item._id)}
                            />
                        ))
                  }
                </div>
                {todos.length === 0 && <h3>No todos found.</h3>}
            </div>
        </DIV>
    );
};

export { Home };

const DIV = styled.div`

  .todoBox {
    width: 60%;
    margin: auto;
    padding: 30px;
  }
    
  .createBox {
    width: 90%;
    display: flex;
    gap: 50px;
    margin: auto;
    margin-bottom:20px;
  }

  input {
    padding: 7px;
    border-radius:5px;
    width: 90%;
  }
  button {
    width: 100px;
    border-radius: 5px;
    cursor: pointer;
    background-color: blue;
    color: white;
    border: none;
  }
`