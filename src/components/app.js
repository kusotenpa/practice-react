import React from 'react';
import AddTodo from '../containers/add-todo';
import VisibleTodoList from '../containers/visible-todo-list';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App;
