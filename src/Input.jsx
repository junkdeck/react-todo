import React, { Component } from 'react'

class Input extends Component{

  render(){
    return(
      <form onSubmit={this.props.onSubmit}>
        <input type="text" className="todo-input" onChange={this.props.onChange} value={this.props.inputValue}/>
      </form>
    )
  }
}

export default Input
