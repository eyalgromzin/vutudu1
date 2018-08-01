import React, { Component } from 'react'
import CreateIdeaButton from './createIdeaButton/createIdeaButton'
import './topBar.css'
import 'commonCss.css'

export default class TopBar extends Component {
  render() {
    return (
      <div id="TopBar mainContent">
        <div class="mainContent"> 
          <img src={require("images/logo.png")} class="topBarLogo verticalMiddleAlign" />
          VUTUDU2
          <CreateIdeaButton />
        </div>
      </div>  
    )
  }
}
