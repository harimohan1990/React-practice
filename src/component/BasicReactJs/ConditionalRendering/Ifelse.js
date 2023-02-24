import React, { Component } from 'react'

export class Ifelse extends Component {
  constructor(props){
    super(props)
    this.state={
       data: false
    }
  }
  render() {
    if(this.state.data){
      return <h1>Hello if</h1>
    }else{
      return <h1>No Data else </h1>
    }
  }
}

export default Ifelse