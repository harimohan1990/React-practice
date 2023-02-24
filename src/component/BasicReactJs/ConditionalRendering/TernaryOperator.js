import React, { Component } from 'react'

export class TernaryOperator extends Component {
    constructor(props){
        super(props)
        this.state={
            loading:true
        }
    }
  render() {
   
    return (
      <div>hello {this.state.loading ? <p>TernaryOperator</p>:<p>Hello </p> }</div>
    )
  }
}

export default TernaryOperator