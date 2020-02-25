import  { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';


const todosReducer = (state = initialState, action) => { 
  switch (action.type) { 
    case RECEIVE_TODOS: 
      return Object.assign({}, action.todos); 
    case RECEIVE_TODO: 
      var id = action.todo.id;
      var todo = { [id]: action.todo }
      return Object.assign({}, state, todo);
    case REMOVE_TODO: 
      var oldState = Object.assign({}, state);
      delete oldState[action.todo.id]; 
      return oldState; 
    default: 
    return state; 
  }
}

export default todosReducer; 



const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};