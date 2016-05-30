import { connect } from 'react-redux';
import TodoList from '../components/todo-list';
import { toggleTodo } from '../redux/actions';

const mapStateToProps = state => {
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    },
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
