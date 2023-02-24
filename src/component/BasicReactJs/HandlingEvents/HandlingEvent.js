import React, { Component } from 'react'

export class HandlingEvent extends Component {
    constructor(props){
        super(props)
            this.state = {isToggleOn: true};
            // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    }

     handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }

      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    
  render() {
    return (
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

export default HandlingEvent