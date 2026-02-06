## 실행 방법

### 1. 라이브러리 설치

```bash
npm install
```

### 2. 서버 실행

```bash
npm run dev
```

* 로컬 서버 접속: [http://localhost:3000/](http://localhost:3000/)
* 배포 서버: [https://goorm-react-todo.vercel.app](https://goorm-react-todo.vercel.app)

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

---

## 상태(State) 관리

### 1. `todos` (App.js)

* 전체 할 일 목록을 관리하는 상태
* 각 항목은 `id`, `text`, `completed` 값을 가짐
* 모든 데이터 변경의 **중앙 상태(source of truth)**

### 2. `text` (TodoForm.js)

* 새로운 할 일을 입력할 때 실시간으로 변하는 입력값 상태

### 3. `search` (TodoList.js)

* 사용자가 입력한 검색어 상태
* Todo 목록 필터링에 사용

### 4. `error` (TodoForm.js)

* 입력값이 비어 있을 때 사용자에게 보여줄 에러 메시지 상태

---

## 불변성(Immutability) 업데이트

```js
const updateTodo = (targetId) => {
  // map을 사용하여 기존 배열을 직접 수정하지 않고 새로운 배열을 생성
  setTodos(
    todos.map((todo) =>
      todo.id === targetId
        ? { ...todo, completed: !todo.completed } // 변경 대상만 복사 후 수정
        : todo // 나머지는 그대로 유지
    )
  );
};
```

### 문제 상황

* `todos[i].completed = true` 처럼 **기존 객체를 직접 수정**하면
* 배열의 참조값(메모리 주소)이 바뀌지 않아
* React가 상태 변경을 감지하지 못함

### 해결 방법

* `map()`을 사용해 **새로운 배열을 반환**
* 변경이 필요한 요소만 복사하여 수정
* React는 새로운 참조값을 감지하고 화면을 즉시 재렌더링

👉 그 결과, 체크 상태와 스타일이 정상적으로 업데이트됨
