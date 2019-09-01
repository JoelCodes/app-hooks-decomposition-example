import {useState} from 'react';
import * as api from './api-calls';

export default function useTodoData(){
  const [todos, setTodos] = useState([]);
  
  async function loadTodos(){
    const todosFromApi = await api.getTodos();
    setTodos(todosFromApi)
  }

  async function addTodo(todoName){
    const newTodo = await api.addTodo(todoName);
    setTodos(todos => [...todos, newTodo]);
    return newTodo;
  }

  async function toggleTodo(todoId){
    const toggledTodo = await api.toggleTodo(todoId);
    setTodos(todos => todos
      .map(todo => todo.id === todoId ? toggledTodo : todo));
    return toggledTodo;
  }

  return {
    todos,
    loadTodos,
    addTodo,
    toggleTodo
  };
}