import useTodoData from './useTodoData';
import useLoadTodos from './useLoadTodos';
import useAddTodo from './useAddTodo.step3';
import useToggleTodo from './useToggleTodo';

export default function useTodoList(){
  const {
    todos,
    ...dataOps
  } = useTodoData();

  return {
    todos,
    ...useLoadTodos(dataOps),
    ...useAddTodo(dataOps),
    ...useToggleTodo(dataOps)
  }
}