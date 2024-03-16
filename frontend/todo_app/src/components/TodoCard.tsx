import styled from "styled-components";
import { TODOS } from "../pages/Home";

interface TodoCartProps extends TODOS {
  status: boolean;
}

const TodoCart = ({ sr, title, status, editTodo, deleteTodo}:TodoCartProps) => {
  return (
<DIV>
      <div className="mainDiv">
        <div className="titleBox">
          <p>{sr}.</p>
          <p>{title}</p>
        </div>
        <p style={{color: status ? "green" : "red"}} data-testid="todo-status">
          {status ? "Completed" : "In Process"}
        </p>
        <div className="editDeleteBTN">
          <button onClick={() => editTodo && editTodo()} data-testid="todo-edit">Edit</button>
          <button onClick={() => deleteTodo && deleteTodo()} data-testid="todo-delete">Delete</button>
        </div>
        <hr />
      </div>
    </DIV>
  );
};

export { TodoCart };


const DIV =styled.div`
  .mainDiv {
    width: 90%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    margin-bottom: 0px;

  }
  .titleBox {
    width: 60%;
    display: flex;
    justify-content: flex-start;
    gap: 50px;
  }
  .editDeleteBTN{
    width: 20%;
    display: flex;
    justify-content: space-around;
  }
  button {
    padding: 10px;
    margin-left:20px
  }
  button:nth-child(2){
    color:white; 
    background-color: red;
  }
  button:nth-child(1){
    color:white; 
    background-color: green;
  }
`