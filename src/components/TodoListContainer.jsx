import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/modules/todos";

const TodoListContainer = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const onToggleTodo = (id) => {
    dispatch(toggleTodo({ id }));
  };

  const todoList = [];
  const doneList = [];
  todos.forEach((todo) => {
    if (todo.isDone) {
      doneList.push(todo);
    } else {
      todoList.push(todo);
    }
  });

  return (
    <>
      <h3>할 일</h3>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => onToggleTodo(todo.id)}>완료</button>
            <button onClick={() => onDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <h3>완료한 일</h3>
      {doneList.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => onToggleTodo(todo.id)}>취소</button>
          <button onClick={() => onDeleteTodo(todo.id)}>삭제</button>
        </li>
      ))}
    </>
  );
};

export default TodoListContainer;
