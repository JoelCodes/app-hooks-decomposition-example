import {useState} from 'react';

export default function useToggleTodo(dataOps){
  const [togglingIds, setTogglingIds] = useState([]);

  async function toggleTodo(todoId) {
    setTogglingIds(togglingIds => [...togglingIds, todoId]);
    await dataOps.toggleTodo(todoId);
    setTogglingIds(togglingIds => togglingIds
      .filter(togglingId => togglingId !== todoId));
  }
  
  return {
    togglingIds,
    toggleTodo
  }
}