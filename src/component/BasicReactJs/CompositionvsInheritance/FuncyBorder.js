import React from 'react'
export default function FuncyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
          {props.children}
    </div>
  )
}
