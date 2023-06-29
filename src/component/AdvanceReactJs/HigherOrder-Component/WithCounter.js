import React,{Component} from 'react';

const  WithCounter =(WrapperComponent,countNumber) =>{

    class WithWrapperCounter extends Component{
      
        constructor(props){
            super(props)
            this.state={
              count:0
            }
          }
        
          incrementState=()=>{
        
            this.setState(prevState=>{
              return{
                count: prevState.count +countNumber
              }
            })
          }


        render(){
            return(
             <div>
                <WrapperComponent IncrementCounter={this.incrementState} Count ={this.state.count} {...this.pros}/>
             </div>

              )
        }
    }

    return WithWrapperCounter
}

export default WithCounter;

