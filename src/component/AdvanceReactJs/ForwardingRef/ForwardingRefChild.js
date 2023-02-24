import React from 'react'


const ForwardingRefChild =React.forwardRef((props,ref)=>{

    console.log("props",props)
    return (
        <div>
            <input type="text"  ref={ref}/>
        </div>
      )
})
  

    


export default ForwardingRefChild