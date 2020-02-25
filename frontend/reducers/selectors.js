
//state.todos = {1: {…}, 2: {…}}

export const allTodos = ({ todos }) => { 
 return Object.keys(todos).map(id => todos[id])
}

export const stepsByTodoId = (state, toDoId) => { 
  var steps = state.steps; 
 
  return Object.values(steps).filter(step => step.todo_id === toDoId);
}

window.stepsByTodoId = stepsByTodoId; 