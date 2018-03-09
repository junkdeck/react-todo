import React from 'react'
import ListItem from './ListItem'

// stateless component
const TodoList = (props) => {
  return(
    <div className="todo-list">
      <ul>
        {
          props.todos.map((item, index) => {
            return (
              <ListItem item={item} index={index}/>
            )
          }
        )
      }
    </ul>
  </div>
)
}

export default TodoList
