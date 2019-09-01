import {useState, useMemo} from 'react'

export default function useAddTodo(dataOps){
  const [addingCount, setAddingCount] = useState(0);
  const [todoName, setTodoName] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const todoNameError = useMemo(() => {
    return todoName.trim() === '' ? 'Task name missing'
    : todoName.toLowerCase().includes('cuss') ? 'Obscenity not allowed'
    : undefined
  }, [todoName]);
  
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

  return {
    addTodo,
    addingCount,
    showErrors,
    todoName,
    setTodoName,
    todoNameError
  }
}