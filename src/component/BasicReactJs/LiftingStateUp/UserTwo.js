import React, { Component } from 'react'

export class UserTwo extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <p>User name : {this.props.userName}</p>
      </div>
    )
  }
}

export default UserTwo