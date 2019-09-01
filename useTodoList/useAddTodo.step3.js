import {useState, useMemo} from 'react'

export default function useAddTodo(dataOps){
  const [addingCount, setAddingCount] = useState(0);
  
  async function addTodo(todoName) {
    setAddingCount(ac => ac + 1);
    await dataOps.addTodo(todoName);
    setAddingCount(ac => ac - 1);  
  }

  return {
    addTodo,
    addingCount,
  }
}