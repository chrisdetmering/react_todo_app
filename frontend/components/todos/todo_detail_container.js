import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo_actions';
import { receiveSteps} from '../../actions/step_actions';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = (dispatch) => ({ 
  removeTodo: todo => dispatch(removeTodo(todo)),
  receiveSteps: step => dispatch(receiveSteps(step))
})

const detailViewContainer = connect(null, mapDispatchToProps
)(TodoDetailView); 

export default detailViewContainer; 