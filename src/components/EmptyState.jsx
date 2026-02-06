import "./EmptyState.css";

function EmptyState({todos}) {
  const total = todos.length;
  
  const done = todos.filter(todo => todo.completed).length;
  
  const progress = total > 0 ? Math.floor((done / total) * 100) : 0;

  return (
    <div className="EmptyState">
      <span>완료 {done}/{total}</span>
      <span>{progress}%</span>
    </div>
  );
}

export default EmptyState;