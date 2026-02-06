import "./TodoForm.css";
import {useState, useRef} from "react";

function TodoForm({addTodo}){
  const[text, setText] = useState("");

  const inputRef = useRef();
  
  

  const onChangeText=(e)=>{
    setText(e.target.value);
  }
  const addSubmit=(e)=>{
    e.preventDefault()
    
    text.trim() === ""
      ? alert("빈칸입니다.") 
      : addTodo(text);
    
    setText("");
    inputRef.current.focus()
  }

  return (
    <form className ="TodoForm">
      <input 
        value={text}
        ref={inputRef} 
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