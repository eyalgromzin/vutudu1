import React, { Component } from 'react'

export default class TopBar extends Component {
  render() {
    return (
      <div>
        <div id="TopBar">
            <div id="topBarLogo">VUTUDU</div>
            <Login />
            <CreateIdea />
            {/* <user drop down - after login /> */}
        </div>  
      </div>
    )
  }
}
