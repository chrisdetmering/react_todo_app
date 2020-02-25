import React from 'react'; 
import StepListContainer from '../steps_list/step_list_container';


class TodoDetailView extends React.Component { 
  constructor(props) { 
    super(props)
    
  } 
  
  render(){ 
    var body = this.props.todo.body; 
    var id  = this.props.todo.id
     
    return (<div>
      <p>{body}</p>
      <p>Steps</p>
      <StepListContainer todo_id={id}/> 
    </div>
    )
  }
}

export default TodoDetailView; 