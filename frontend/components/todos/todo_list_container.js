import  ToDoList   from './todo_list';
import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, removeTodo } from '../../actions/todo_actions';


const mapStateToProps = (state) => ({ todos: allTodos(state) });
const mapDispachToProps = (dispatch) => ({ 
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

const TodoListContainer = connect(
  mapStateToProps, 
  mapDispachToProps
)(ToDoList);



export default TodoListContainer;