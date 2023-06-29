import React, { Component } from 'react'
import ForwardingRefChild from './ForwardingRefChild'

export default  class ForwardingRefParent extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
     clickHanddler=()=>{
      this.inputRef.current.focus()
    }
    render(){
        return(
            <>
            <ForwardingRefChild   ref={this.inputRef}/>
            <button  onClick={this.clickHanddler}> Press me hard
            </button>
            </>
        )
    }
}

        

