## 실행 방법

### 1. 라이브러리 설치

```bash
npm install
```

### 2. 서버 실행

```bash
npm run dev
```

- 로컬 서버 접속: [http://localhost:3000/](http://localhost:3000/)
- 배포 서버: [https://goorm-react-todo.vercel.app](https://goorm-react-todo.vercel.app)

---

## 컴포넌트 구조

```
App ─ 전체 컴포넌트 관리 (추가 · 수정 · 삭제 로직)
├── Header
├── TodoForm        ─ input + submit (사용자 입력)
└── TodoList        ─ TodoItem 렌더링 및 검색 처리
    ├── TodoItem    ─ 개별 Todo 항목 (반복 렌더링)
    └── EmptyState  ─ 실시간 현황 표시
```

- App 컴포넌트는 최상위 컴포넌트이며 전체 컴포넌트 루트를 관리한다. 또한 Todo 추가, 상태변경, 삭제 핵심 로직을 관리한다. Header 컴포넌트는 화면 상단의 제목을 표시하는 역할을 하고 있다. 바로 아래에 TodoForm 컴포넌트는 사용자가 입력한 값을 이벤트 처리 후 해당 데이터는 App 컴포넌트에서 상태 관리한다. 이후 TodoList 컴포넌트에서는 현재의 Todo 목록을 렌더링하고 검색어 창을 통해 목록을 필터링한다. 이후 TodoItem 자식 컴포넌트에서는 Todolist에 반복 렌더링 되어 표시한다. 또한 Emptystat 컴포넌트는 부모 컴포넌트에서 todos를 가져와 .length을 통해 길이로 총 갯수를 계산하여 실시간 현황을 보여준다.

---

## 상태(State) 관리

### 1. `todos` (App.js)

- 전체 할 일 목록을 관리하는 state 이다. 각 항목은 `id`, `text`, `completed` 값을 갖고 있으며 추가, 상태변경, 삭제로 데이터 변경을 하기도 한다.

### 2. `text` (TodoForm.js)

- 새로운 할 일을 입력할 때 상태를 변경하며 빈값 입력시 "빈칸입니다." 메시지를 띄우고 useRef를 사용해 다시 input 요소에 포커스 된다.

### 3. `search` (TodoList.js)

- 사용자가 입력한 검색어이며 Todo 목록 필터링에 사용된다.

---

## 불변성(Immutability) 업데이트

```js
const updateTodo = (targetId) => {
  // map을 사용하여 기존 배열을 직접 수정하지 않고 새로운 배열을 생성
  setTodos(
    todos.map(
      (todo) =>
        todo.id === targetId
          ? { ...todo, completed: !todo.completed } // 변경 대상만 복사 후 수정
          : todo, // 나머지는 그대로 유지
    ),
  );
};
```

`todos[i].completed = true` 처럼 **기존 객체를 직접 수정**하면 배열의 참조값이 바뀌지 않아 React가 상태 변경을 감지하지 못한다. `map()`을 사용해 \*\*새로운 배열을 반환 하여 변경이 필요한 요소만 복사하여 수정한다. 이때 React는 새로운 참조값을 감지하고 화면을 즉시 재렌더링 된다.
