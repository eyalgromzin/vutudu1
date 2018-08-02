import React, { Component } from 'react'

export default class NumOfPeopleCreator extends Component {
  render() {
    return (
      <div class="searchBarChooserContainer" > 
        <div class="searchBarChooserData">
          <img src={require("images/people.png")} class="searchBarIcon" />
          <span class="searchBarText">people</span>
          <div>
            <input type="text" id="peopleCreatorFrom" />
            -
            <input type="text" id="peopleCreatorTo" />
          </div>
        </div>
      </div>
    )
  }
}
