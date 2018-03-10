import React from 'react'
import ListItem from './ListItem'

// stateless component
const TodoList = (props) => {

  return(
    <div className="todo-list">
      <ul onClick={props.onClick}>
        {
          props.todos.map((item) => {
            return (
              <ListItem item={item.toString()} key={item}/>
            )
          }
        )
      }
    </ul>
  </div>
)
}

export default TodoList
