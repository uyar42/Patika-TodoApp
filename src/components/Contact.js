import React from "react";
import Main from "./Main/index";
import Footer from './Footer/Footer.jsx'
import { Button,TextField  } from "@mui/material";
import Box from '@mui/material/Box';
import { useState } from "react";
import styles from  "./style.module.css"
// const initialTodos=[{id:1, name : "Learn Javascript" , isDone:true},
// {id:2, name : "Learn React" , isDone:false},
// {id:3, name : "Have a Life!" , isDone:false}]
function Contact() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  


  const formHandler = (e) => {
    e.preventDefault();
    const addTodo = [...list, { content: todo, isDone: false }];
    if (todo==="") {
      alert("You must write something..!")
    }
    else{
      setList(addTodo);
      setTodo("");
      console.log(list);
    }

  };

  return (
    <div  style={{textAlign:"center" }}>
      <h1 > TODOS</h1>
      <form onSubmit={formHandler}>
        <div> 
        <TextField  id="standard-basic" label="Enter Todo" variant="standard"
            type="text"
            style={{width:"500px"}}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

<Button  style={{marginTop:"8px" , marginLeft:"8px"}}
           variant="contained" color="success" onClick={formHandler}>Add</Button>
</div>
      </form>
      {list.map((todo, index) => (
        <Main setTodo={setTodo} todo={todo} key={index} index={index} todos={list} setList={setList} />
        
      ))}
     
      <Footer setTodo={setTodo} todo={todo}  todos={list} setList={setList}/>

           
   
          
    </div>
  );
}

export default Contact;
