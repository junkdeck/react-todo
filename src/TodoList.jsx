import React from 'react'
import ListItem from './ListItem'

// stateless component
const TodoList = (props) => {

  return(
    <div className="todo-list">
      <ul>
        {
          props.todos.map((item) => {
            // bind the components onClick function to attach 'item' argument
            // let boundClick = props.onClick.bind(this, item)
            return (
              <ListItem item={item.toString()} key={item} onClick={props.onClick(item)}/>
            )
          }
        )
      }
    </ul>
  </div>
)
}

export default TodoList
