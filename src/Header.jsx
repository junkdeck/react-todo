import React, {Component} from 'react'

const UserGreeting = (props) => {
  return <h1>Welcome back, {props.name}</h1>
}

const GuestGreeting = (props) => {
  return <h1>Please log in.</h1>
}

const Greeting = (props) => {
  let isLoggedIn = props.isLoggedIn
  if(isLoggedIn){
    return <UserGreeting name={props.name}/>
  }else{
    return <GuestGreeting/>
  }
}

class Header extends Component{
  render(){
    return(
      <div className="header flex-right">
        <Greeting isLoggedIn={this.props.isLoggedIn} name={this.props.name}/>
      </div>
    )
  }
}

export default Header
