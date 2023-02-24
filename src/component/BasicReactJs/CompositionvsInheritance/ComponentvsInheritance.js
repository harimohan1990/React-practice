import React, { Component } from 'react'
import Chat from './Chat'
import Contacts from './Contacts'
import WelcomeDialog from './MostFancy'

import Mostfancy from './MostFancy'

import SplitPane from './SplitPane'

export default class ComponentvsInheritance extends Component {
  render() {
    return (
      <div>
        <Mostfancy/>
        <SplitPane
      left={
        <Contacts/>
      }
      right={
       <Chat/>
      } />
      <WelcomeDialog/>
      </div>
    )
  }

  
}

// React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.