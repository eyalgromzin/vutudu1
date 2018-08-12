import React, { Component } from 'react'
import '../searchBarCommonStyles.css'
import 'commonCss.css'

export default class NumOfPeopleCreator extends Component {
  render() {
    return (
      <div class="searchBarChooserContainer" > 
        <div class="searchBarChooserData">
          <img src={require("images/people.png")} class="searchBarIcon verticalMiddleAlign" />
            <input type="text" id="peopleCreatorFrom" class="verticalMiddleAlign" />
            -
            <input type="text" id="peopleCreatorTo" class="verticalMiddleAlign" />
        </div>
      </div>
    )
  }
}
