import "./EmptyState.css";

function EmptyState({todos}) {
  const total = todos.length; // 전체 할 일 개수
  
  const done = todos.filter(todo => todo.completed).length; // 완료된 할 일 개수
  
  const progress = total > 0 ? Math.floor((done / total) * 100) : 0;
  // 진행률 계산
  return (
    <div className="EmptyState">
      <span>완료 {done}/{total}</span>
      <span>{progress}%</span>
    </div>
  );
}

export default EmptyState;