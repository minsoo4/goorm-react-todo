import "./TodoItem.css";


function TodoItem({id, text, completed, updateTodo, deleteTodo}){
  
  const onChangeCheckbox=()=>{
    updateTodo(id);
  }// 체크박스 상태 변경 함수

  const onClickDelete=()=>{
    deleteTodo(id);
  } // 삭제 버튼 클릭 함수

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