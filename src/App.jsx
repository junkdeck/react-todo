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
    console.log(this.state.inputValue)
    // reset input field
    this.setState({
      todos: [...this.state.todos, this.state.inputValue],
      inputValue: ''
    })
  }

  render(){
    return(
      <div className='wrapper'>
        <Header isLoggedIn={true} name="fred"/>
        <div className="content flex-center">
          <div className="todo-container">
            <Input onChange={this.inputChange} onSubmit={this.inputSubmit} inputValue={this.state.inputValue}/>
            <TodoList todos={this.state.todos} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
