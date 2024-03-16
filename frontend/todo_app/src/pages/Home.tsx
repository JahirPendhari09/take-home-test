import { useState } from "react";
import { TodoCart } from "../components/TodoCard";

import "../App.css"
import styled from "styled-components";

export type TODOS = {
    title: string;
    status: boolean;
    id: number;
    sr?:number;
    editTodo?: () => void; 
    deleteTodo?: () => void; 
};

const Home = () => {
    const [todos, setTodos] = useState<TODOS[]>([]);

    const[title, setTitle] = useState<string>("");

    const editTodo = (id: number) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, status: !todo.status } : todo
        );

        setTodos(updatedTodos);
        
    };
    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter((todo) =>
        {
            return todo.id !== id 
        });

        setTodos(updatedTodos);
    };

    const submitNewTodo=(e: any)=>{
        e.preventDefault();
        if(title === ""){
            return alert("Please enter Your title")
        }else{
            const newTodo:TODOS = {
                title:title,
                id:Math.random(),
                status:false,            
            }
            const updatedTodo:TODOS[] =  [...todos, newTodo ];
            setTodos(updatedTodo);
            setTitle("")

        }  
    }

    // console.log(todos)
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
                            <TodoCart 
                               id={item.id}
                               sr={i+1}
                               title={item.title}
                               status={item.status}
                               editTodo={() => editTodo(item.id)}
                               deleteTodo={() => deleteTodo(item.id)}
                            />
                        ))
                  }
                </div>
                {todos.length ==0 && <h3>No todos found.</h3>}
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