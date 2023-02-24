import React, { Component } from 'react'
import UserOne from './UserOne'
import UserTwo from './UserTwo'

export class LiftingState extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'Hello'
        }
    }
  render() {
    return (
      <div>
        <UserOne userName={this.state.name} />
        <UserTwo userName={this.state.name}/>
      </div>
    )
  }
}

export default LiftingState