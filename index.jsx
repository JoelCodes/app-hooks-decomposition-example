import React from 'react';
import {render} from 'react-dom';
import 'babel-polyfill';

import useTodoList from './useTodoList/step3';
import TodoListPresenter from './TodoListPresenter/step3';

function TodoList(){
  const appLogic = useTodoList();
  return (<TodoListPresenter {...appLogic}/>);
}

const root = document.getElementById('root');
render(<TodoList/>, root);