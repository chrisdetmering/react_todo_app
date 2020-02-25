import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';


const stepReducer = (state = initialState, action) => { 
  switch (action.type) { 
    case RECEIVE_STEPS: 
      return Object.assign({}, action.steps)
    case RECEIVE_STEP: 
      var id = action.step.id; 
      var step = action.step; 
      return Object.assign({}, state, { [id]: step });
    case REMOVE_STEP: 
      var newState = Object.assign({}, state);
      delete newState[action.step.id]; 

      return newState; 
    default: 
      return state; 
  }
}

export default stepReducer; 

const initialState = { 
    1: { 
      id: 1,
      title: 'walk to store',
      done: false,
      todo_id: 1
      },
    2: { 
      id: 2,
      title: 'buy soap',
      done: false,
      todo_id: 1
      }
}