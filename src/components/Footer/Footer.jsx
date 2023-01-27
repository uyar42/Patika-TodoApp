import React from "react";
import Button from "@mui/material/Button";
import style from "./style.module.css";
import { useState } from "react";

function Footer({ todos, setList, index }) {
  const unCompleted = todos.filter((todo) => todo.isDone === false);
  const Completed = todos.filter((todo) => todo.isDone === true);
 const [temp,setTemp] = useState([todos])


  const showAllActive = ()=>{
    const newTodos = todos.filter((todo) => todo.isDone === false);
    console.log(newTodos);
    setList([...newTodos])
  }

  const showCompleted = ()=>{
    const newTodos = todos.filter((todo) => todo.isDone === true);
    console.log(newTodos);
    setList([...newTodos])
  }

  const deleteAllForm = () => { 
    const newTodos = [...todos];
    newTodos.splice(index, 15);
    setList([]);
  };
  return (
    <div>
      <p> {unCompleted.length} items left</p>

      <Button variant="text" onClick={showCompleted}>
        Completed
      </Button>
      <Button variant="text" onClick={deleteAllForm}>
        Clear All
      </Button>
      <Button variant="text" onClick={showAllActive}>
        All Active
      </Button>
    </div>
  );
}

export default Footer;
//setiscompleted statelerini dene bunları yapman lazım alim hadi iyi gecler