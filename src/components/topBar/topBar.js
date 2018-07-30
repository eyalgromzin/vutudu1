import React, { Component } from 'react'
import CreateIdeaButton from './createIdeaButton/createIdeaButton'

export default class TopBar extends Component {
  render() {
    return (
      <div>
        <div id="TopBar">
            <div id="topBarLogo">
            {/* <img src={ require('./images/image1.jpg') } /> */}
            <img src={require("images/logo.png")} class="topBarLogo" />
            VUTUDU
            </div>
            <CreateIdeaButton />
        </div>  
      </div>
    )
  }
}
