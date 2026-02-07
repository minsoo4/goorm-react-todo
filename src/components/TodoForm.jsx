import "./TodoForm.css";
import {useState, useRef} from "react";

function TodoForm({addTodo}){
  const[text, setText] = useState(""); // 입력값 상태 관리

  const inputRef = useRef(); // 입력창에 포커스 주기 위한 ref
  
  

  const onChangeText=(e)=>{
    setText(e.target.value); // 입력값 변경
  }
  const addSubmit=(e)=>{
    e.preventDefault() // 새로고침 방지
    
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