import React, { Component } from 'react'

export class PropsComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            
        }
    }
  render() {
    return (
      <div>
       <p>myname from other component {this.props.name}</p> 
        </div>
    )
  }
}

export default PropsComponent