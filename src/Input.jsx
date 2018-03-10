import React, { Component } from 'react'

class Input extends Component{

  render(){
    return(
      <div className="todo-input-div">
        <form onSubmit={this.props.onSubmit}>
          <input type="text" className="todo-input" onChange={this.props.onChange} value={this.props.inputValue}/>
        </form>
      </div>
    )
  }
}

export default Input
