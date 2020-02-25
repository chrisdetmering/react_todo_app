import React from 'react'; 
import StepListForm from './step_list_form';
import StepListItemContainer from './step_list_item_container';

class StepList extends React.Component { 
  constructor(props) { 
    super(props)
  }

  render() { 
    var steps = this.props.steps 

    return(<div>
      <ol>
        {steps.map(step => (
          <StepListItemContainer key={Math.random() * 56} step={step}/> 
        ))}
      </ol>

      <StepListForm receiveStep={this.props.receiveStep} todo_id={this.props.todo_id}/> 
    </div>
    )
  }

}

export default StepList; 