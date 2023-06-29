import React from 'react'


export default function Wrapper(props) {
  return (
    <div>My count :  {props.render()}</div>
  )
}
