import React, { Component } from 'react'

import WithCounter from './WithCounter'
export class CounterComponent extends Component {

  
  render() {
    const {IncrementCounter,Count} = this.props;
    return (
      <div>
         <p>Print here the count : {Count}</p>
        <button onClick={IncrementCounter} >Press </button>
      </div>
    )
  }
}

export default  WithCounter(CounterComponent,10)


// this is a pattern where a function takes a component as a arguments and return a new component
// higher order component

//const NewComponent   =  HigerOrderComponent(Originalcomponent)

