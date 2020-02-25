import React from 'react'; 
import { uniqueId } from '../../util/util';

class StepListForm extends React.Component { 
  constructor(props) { 
    super(props)
  
    this.state = { title: "", todo_id: this.props.todo_id, done: false }
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleInput = this.handleInput.bind(this); 
  } 
  handleInput(e) { 
    e.preventDefault(); 
    var userInput = e.target.value; 

    this.setState({ title: userInput })
  }


  handleSubmit(e) { 
    e.preventDefault()
    const step = Object.assign({}, {id: uniqueId()}, this.state )

    this.props.receiveStep(step);
    this.setState({ title: "" })
  }

  render() { 
    return( 
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="add-step">
          Add Step: 
          <input type="text" 
            onChange={this.handleInput} 
            name="add-step"
            value={this.state.title}/>
          <input type="submit" value="Add Step"/>
        </label>
      </form>
    )
  }
}

export default StepListForm; 