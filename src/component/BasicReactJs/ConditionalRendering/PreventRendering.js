import React, { Component } from 'react'

export class PreventRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false, name: 'John'};
      }
  render() {
    return (
        <Greeting loggedIn={this.state.loggedIn} />
    )
  }
}

function Greeting(props) {
   
    if (!props.loggedIn) {
      return null;
    }
  
    return <div className="greeting">welcome, {props.name}</div>;
  }
export default PreventRendering