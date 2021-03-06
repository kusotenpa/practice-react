export const REQUEST_TODOS = 'REQUEST_TODOS';
let nextTodoId = 0;

export const addTodo = ({ text, completed }) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    completed,
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};

export const setVisiblityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

export const requestTodos = () => {
  return {
    type: 'REQUEST_TODOS',
  };
};
