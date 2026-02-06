import "./TodoItem.css";


function TodoItem({id, text, completed, updateTodo, deleteTodo}){
  
  const onChangeCheckbox=()=>{
    updateTodo(id);
  }

  const onClickDelete=()=>{
    deleteTodo(id);
  }

  return (
    <div className={`TodoItem ${completed ? "done" : ""}`}>
      <input
        onChange={onChangeCheckbox}
        checked={completed}
        type="checkbox"
      />
      <div className="text">{text}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div> 
  )
}

export default TodoItem;