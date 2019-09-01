import React from 'react';

export function NewTodoForm({   
  addTodo,
  todoName,
  setTodoName,
  showErrors,
  todoNameError,
 }) {
  function onSubmit(event) {
    event.preventDefault();
    addTodo();
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
