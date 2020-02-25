import React from 'react'
import { uniqueId } from '../../util/util'

class TodoForm extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { title: "", body: "", done: false }
    this.props = props;
    this.updateProperty = this.updateProperty.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateProperty(event) { 
    event.preventDefault();
    var name = event.target.name; 
    var value = event.target.value; 

    this.setState({ [name]: value })
  }

  handleSubmit(event) { 
    event.preventDefault();
    var todo = Object.assign({}, { id: uniqueId() }, this.state);
    this.props.receiveTodo(todo)
    
    this.setState({ title: "", body: "" });
  }

  render() { 
    return(<div>
      <h1>Add ToDo:</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input onChange={this.updateProperty}   
            name="title" 
            value={this.state.title} />
          
          <label htmlFor="body">Body</label>
          <textarea 
            name="body" 
            id="" 
            cols="30" 
            rows="10" 
            onChange={this.updateProperty}
            value={this.state.body}></textarea>

          <input type="submit" value="Submit"/>
        </form>
      </div>)
  }

}

export default TodoForm; 