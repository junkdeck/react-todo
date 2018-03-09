import React from 'react'
import List from './List'

// stateless component
const TodoList = (props) => {
  return(
    <div className="todo-list">
      <ul>
        {
          props.todos.map((item) => {
            return (
              <List item={item}/>
            )
          }
        )
      }
    </ul>
  </div>
)
}

export default TodoList
