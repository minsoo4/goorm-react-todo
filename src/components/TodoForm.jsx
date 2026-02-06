import "./TodoForm.css";
import {useState} from "react";

function TodoForm({addTodo}){
  const[text, setText] = useState("");

  const onChangeText=(e)=>{
    setText(e.target.value);
  }
  const addSubmit=(e)=>{
    e.preventDefault()
    
    text.trim() === ""
      ? alert("빈칸입니다.") 
      : addTodo(text);
    
    setText("");
  }

  return (
    <form className ="TodoForm">
      <input 
        value={text} 
        onChange={onChangeText} 
        placeholder="새 할일 입력..."/>
      <button 
        onClick={addSubmit}>
        추가
      </button>
    </form>
  );
};

export default TodoForm;