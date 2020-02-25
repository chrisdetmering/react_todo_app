import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class ToDoList extends React.Component { 
  constructor(props) { 
    super(props)  
    this.props = props;
  }

  render() { 
    var receiveTodo = this.props.receiveTodo;
    var removeTodo = this.props.removeTodo; 
    var todos = this.props.todos; 

    return (
      <div>
        <TodoForm receiveTodo={receiveTodo} />

        <ol>
          {todos.map((todo, idx) => (
            <TodoListItem todo={todo} key={idx}
              removeTodo={removeTodo}
              receiveTodo={receiveTodo} />
          ))}
        </ol>
      </div>
    )
  }
}

export default ToDoList; 