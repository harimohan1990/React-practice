import React, { Component } from 'react';


import WithCounter from './WithCounter'
export class HoverCounter extends Component {


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

export default  WithCounter(HoverCounter,15)