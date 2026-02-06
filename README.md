##실행방법

1. 라이브러리 설치
   1. nom install
2. 서버 실행
   1. npm run dev
   2. http://localhost:3000/ 접속(로컬 서버)
   3. https://goorm-react-todo.vercel.app(배포 서버)


##컴포넌트 구조

App - 전체 컴포넌트 구조 (추가, 수정, 삭제 함수)
├── Header 
├── TodoForm (input + submit) - 사용자 입력창
└─── TodoList - TodoItem 렌더링 및 검색
    ├── TodoItem (반복) 
    └── EmptyState - 실시간 현황


상태(state)

1. todos (App.js):

- 전체 할 일 목록 배열입니다. id, text, completed 정보를 담고 있으며 모든 데이터 변화의 근원입니다.

2. text (TodoForm.js):

- 새로운 할 일을 입력할 때 실시간으로 변하는 입력창의 텍스트 상태입니다.

3. search (TodoList.js):

- 사용자가 목록을 필터링하기 위해 입력하는 검색어 상태입니다.

4. error (TodoForm.js):

- 입력창이 비어있을 때 사용자에게 보여줄 에러 메시지 상태입니다.

불변성 업데이트

  const updateTodo = (targetId) => {
  // map을 사용하여 기존 배열은 건드리지 않고, 새로운 배열을 생성합니다.
  setTodos(todos.map((todo) =>
  todo.id === targetId
  ? { ...todo, completed: !todo.completed } // 바꿀 항목만 복사 후 수정
  : todo // 나머지 항목은 그대로 유지
  ));
  };

문제 상황: 만약 todos[i].completed = true와 같이 기존 값을 직접 수정하면, 배열의 메모리 주소(참조값)가 변하지 않아 리액트는 데이터가 바뀌었다고 인식하지 못합니다.

해결 방법: map() 메서드를 사용하면 조건에 맞는 요소만 수정한 새로운 배열을 반환합니다. 리액트는 이 새로운 주소값을 감지하고 화면의 체크 상태와 스타일을 즉시 업데이트합니다.
