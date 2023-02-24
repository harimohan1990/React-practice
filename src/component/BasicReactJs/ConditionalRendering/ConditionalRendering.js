import React, { Component } from 'react'
import IfandLogicaland from './IfandLogicaland';
import Ifelse from './Ifelse';
import PreventRendering from './PreventRendering';
import ReactElement from './ReactElement'
import TernaryOperator from './TernaryOperator';

export default class ConditionalRendering extends Component {
  render() {
    return (
      <div>
        {/* <Ifelse/> */}
        {/* <ReactElement/> */}
       <IfandLogicaland/>
      </div>
    )
  }
}
