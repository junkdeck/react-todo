import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Input from './Input'
import TodoList from './TodoList'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      todos: []
    }
  }

  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  inputSubmit = (e) => {
    e.preventDefault()
    let todoArray = this.state.todos
    todoArray.push(this.state.inputValue)
    // reset input field & add new todo to state array
    this.setState({
      todos: todoArray,
      inputValue: ''
    })
  }

  todoRemove = (e) => {
    let todoArray = this.state.todos
    let indexToRemove = todoArray.indexOf(e.target.innerHTML)
    todoArray.splice(indexToRemove,1)
    this.setState({todos: todoArray});
  }

  render(){
    return(
      <div className='wrapper'>
        <Header isLoggedIn={true} name="fred"/>
        <div className="content flex-center">
          <div className="todo-container">
            <Input onChange={this.inputChange} onSubmit={this.inputSubmit} inputValue={this.state.inputValue}/>
            <TodoList todos={this.state.todos} onClick={this.todoRemove} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
