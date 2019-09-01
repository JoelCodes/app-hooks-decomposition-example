import * as api from './api-calls';
import {useState, useEffect, useMemo} from 'react';

export default function useTodoList(){
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingCount, setAddingCount] = useState(0);
  const [togglingIds, setTogglingIds] = useState([]);
  const [todoName, setTodoName] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const todoNameError = useMemo(() => {
    return todoName.trim() === '' ? 'Task name missing'
    : todoName.toLowerCase().includes('cuss') ? 'Obscenity not allowed'
    : undefined
  }, [todoName]);

  useEffect(() => {
    api.getTodos()
      .then(todos => {
        setTodos(todos);
        setLoading(false);
      })
  }, []);
  
  async function addTodo() {
    if(todoNameError){
      setShowErrors(true);
    } else {
      setShowErrors(false);
      setTodoName('');
      setAddingCount(ac => ac + 1);
      const newTodo = await api.addTodo(todoName);
      setTasks(todos => [...todos, newTodo]);
      setAddingCount(ac => ac - 1);  
    }
  }

  async function toggleTodo(todoId) {
    setTogglingIds(togglingIds => [...togglingIds, todoId]);
    const toggledTodo = await api.toggleTodo(todoId);
    setTasks(todos => todos.map(todo => todo.id === todoId ? toggledTodo : todo));
    setTogglingIds(togglingIds => togglingIds
      .filter(togglingId => togglingId !== todoId));
  }

  return {
    todos,
    loading,
    addingCount,
    addTodo,
    togglingIds,
    toggleTodo,
    todoName,
    setTodoName,
    showErrors,
    todoNameError
  }
}