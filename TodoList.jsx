import useTodoList from './useTodoList';
import TodoListPresenter from './TodoListPresenter';
import React from 'react';

export default function TodoList(){
  const appLogic = useTodoList();
  return (<TodoListPresenter {...appLogic}/>);
}