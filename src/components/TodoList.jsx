import "./TodoList.css";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";
import {useState} from "react";


function TodoList({todos, updateTodo, deleteTodo}){
  const [search, setSearch] = useState(""); // 검색어 상태

  const onChangeSearch=(e)=>{ // 검색어 변경
    setSearch(e.target.value);
  };

  const getFilterlist=()=>
    search === "" 
    ? todos 
    : todos.filter((todo) => todo.text.includes(search));

  const filterTodos = getFilterlist(); // 필터링된 할 일 목록

  return (
    <div className="TodoList">
      <EmptyState todos={todos} />
      <input 
        value={search} 
        onChange={onChangeSearch} 
        placeholder="검색어 입력"></input>
      <div>
        {filterTodos.map((todo)=>{
          return <TodoItem key={todo.id} {...todo} 
                  updateTodo={updateTodo} 
                  deleteTodo={deleteTodo}/>
        })}
      </div>
    </div>
  );
};

export default TodoList;