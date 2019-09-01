import React, {useState, useMemo} from 'react';

function useNewTodoForm(ahAddTodo){
  const [todoName, setTodoName] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const todoNameError = useMemo(() => {
    return todoName.trim() === '' ? 'Task name missing'
    : todoName.toLowerCase().includes('cuss') ? 'Obscenity not allowed'
    : undefined
  }, [todoName]);
  
  function ntfAddTodo(){
    if(todoNameError){
      setShowErrors(true);
    } else {
      setShowErrors(false);
      setTodoName('');
      ahAddTodo(todoName);
    }
  }
  return {
    todoName, showErrors, todoNameError,
    ntfAddTodo, setTodoName
  }
}

export function NewTodoForm({   
  addTodo,
 }) {
  const {
    todoName, setTodoName, showErrors, todoNameError, ntfAddTodo
  } = useNewTodoForm(addTodo);

  function onSubmit(event) {
    event.preventDefault();
    ntfAddTodo();
  }
  function onChange(event){
    setTodoName(event.target.value);
  }
  const validityClass = !showErrors ? ''
    : todoNameError ? 'error'
    : 'valid';
  
  return (<>
    <form className={validityClass} onSubmit={onSubmit}>
      <input onChange={onChange} value={todoName} type="text" placeholder="What are we doing today?" />
      <button type="submit">Add</button>
    </form>
    <p className={`form-message ${validityClass}`}><small>{showErrors ? todoNameError : <>&nbsp;</>}</small></p>
  </>);
}
