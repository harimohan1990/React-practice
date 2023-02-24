import React, { Component } from 'react'

export class IfandLogicaland extends Component {

    constructor(props){
        super(props)
        this.state={
            show:0
        }
    }
  render() {
    return (
      <div>
        {this.state.show > 0 && <h1>hello</h1>}
      </div>
    )
  }
}

export default IfandLogicaland