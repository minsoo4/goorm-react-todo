import './App.css'
import {useState} from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";  
import TodoList from "./components/TodoList";


function App() {
  const [todos, setTodos] = useState([
  { id: 1, text: '리액트 공부하기', completed: false },
  { id: 2, text: '점심 먹기', completed: false },
  { id: 3, text: '운동하기', completed: false },
]);

  const addTodo = (text)=>{
    const newTodo={
      id : Date.now(),
      text : text,
      completed : false,
    }

    setTodos([newTodo, ...todos]);
  }
  const updateTodo =(targetId)=>{
    setTodos(todos.map((todo)=>
      todo.id === targetId
      ?{...todo, completed: !todo.completed}
      :todo
    ))
  }

  const deleteTodo =(targetId)=>{
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }

  return(
    <div className ="App">
      <Header />
      <TodoForm addTodo={addTodo}/>
      <TodoList 
        todos={todos} 
        updateTodo={updateTodo} 
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
