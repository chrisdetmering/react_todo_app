import React from 'react';
import TodoDetailViewContainer from './todo_detail_container';

class TodoListItem extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { detail: false }
    this.showDetail = this.showDetail.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  showDetail(e) { 
    e.preventDefault();
    this.setState({ detail: !this.state.detail })
  }


  updateTodo(event) {
    event.preventDefault()
    var todo = Object.assign({}, 
      this.props.todo, 
      { done: !this.props.todo.done })

    this.props.receiveTodo(todo);
  }

  render() {   
      var { todo } = this.props
      var { title, done } = todo 

    return (<div>
      <li key={this.props.idx} onClick={this.showDetail}>{title}</li>
      {this.state.detail && <TodoDetailViewContainer todo={todo}/>}  
      <button onClick={this.updateTodo}>{done ? "Undo" : "Done"}</button>
    </div>
    )
  } 
}

export default TodoListItem; 






