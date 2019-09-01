import {useState, useEffect, useMemo} from 'react';
import useTodoData from './useTodoData';

export default function useTodoList(){
  const {
    todos,
    ...dataOps
  } = useTodoData();
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
    dataOps.loadTodos()
      .then(() => setLoading(false));
  }, []);
  
  async function addTodo() {
    if(todoNameError){
      setShowErrors(true);
    } else {
      setShowErrors(false);
      setTodoName('');
      setAddingCount(ac => ac + 1);
      await dataOps.addTodo(todoName);
      setAddingCount(ac => ac - 1);  
    }
  }

  async function toggleTodo(todoId) {
    setTogglingIds(togglingIds => [...togglingIds, todoId]);
    await dataOps.toggleTodo(todoId);
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