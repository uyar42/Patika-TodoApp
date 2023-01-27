import { Checkbox, Button } from "@mui/material";
import styles from "./style.module.css";
import React, { useState } from "react";
import TextField from '@mui/material/TextField';

function Todo({ todo, todos, setList, index, setTodo }) {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState();
  const [isCompleted, setIsCompleted] = useState(false);

  const deleteForm = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setList(newTodos);
  };


  // const deleteAllForm = () => {
  //   const newTodos = [...todos]
  //   newTodos.splice(index,15)
  //    setList([])

  // }


  const updateForm = (e) => {
    e.preventDefault();
    const newTodos = [...todos];
    newTodos[index].content = editTodo;
    setList(newTodos);
    setEdit(false);
  };

  const completeHandler = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setList(newTodos);
    setIsCompleted(!isCompleted);
  };

  return (
  
      <span  style={{display:"block",textAlign:"left",marginLeft:"320px",marginTop:"8px",
      flexDirection:"column"}}>
        <Checkbox 
  
     
          checked={isCompleted}
          
          onChange={() => completeHandler(index)}
        />
        {!edit ? (
          <strong 
            style={{
              resize:"none",
              textDecorationLine: isCompleted ? "line-through" : "none",
            }}
          >
            {todo.content}
          </strong>
        ) : (
          <span style={{display:"inline-block",marginRight:"400px"
        }}>
            <form onSubmit={updateForm}>


              <TextField style={{width:"400px"}}
          error
          id="filled-error-helper-text"
          variant="filled"
          label="Edit Todo"
                type="text"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              />
            </form>
        </span>
        )}
        <span style={{display:"inline-block",float:"right",marginRight:"395px"
}}>
          <Button  
            variant="contained"
            onClick={() => {
              setEdit(!edit);
              setEditTodo(todo.content);
            }}
          >
            edit
          </Button>{" "}
          <Button        
            color="error"
            variant="outlined"
            onClick={() => deleteForm(index)}
          >
            delete
          </Button>
        </span>
     
      {/* < button onClick={deleteAllForm}>Clear All</button> */}
    </span>
  );
}

export default Todo;
