import React, { Component } from 'react'
import PropsComponent from './PropsComponent'

export class StateandlifeCycle extends Component {

  constructor(props){
    super(props)
    this.state={
      name: props.name,
      value:10,
      hasError:false
    }
    console.log("constructur runs ")
  }
  static getDerivedStateFromProps(props, state) {
    console.log("hello  getDerivedStateFromProps")
}
  componentDidMount(){
     console.log("componentdidcatch render here")
  }

  HandlerBtn =()=>{
    this.setState({
      value: this.state.value
    })
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldcomponentupdate")
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate")
  }

  componentWillUnmount(){
    console.log("hello componentWillUnmount");
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.

    console.log("getDerivedStateFromError",error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('error',errorInfo,error)
  }



  render() {
    console.log("render method render here");
    return (
      <div>
       <PropsComponent name='Hari'/>
       <button onClick={this.HandlerBtn}>Hello {this.value}</button>
      </div>
    )
  }
}

export default StateandlifeCycle