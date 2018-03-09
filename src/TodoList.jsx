import React from 'react'

class TodoList extends React.Component{
  render(){
    return(
      <div className='todo-list'>
        <ul>
          {
            this.props.todos.map((item) => {
              return (
                <li key={item}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList
