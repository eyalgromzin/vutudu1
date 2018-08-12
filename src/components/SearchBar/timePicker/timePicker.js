import React, { Component } from 'react'
import './timePicker.css'
import '../searchBarCommonStyles.css'

export default class TimePicker extends Component {
  constructor(){
    super();
  }

  change(){
        
  }

  render() {
    return (
       
      <div class="searchBarChooserContainer" > 
        <div class="searchBarChooserData">
          <img src={require("images/time.png")} class="searchBarIcon" />
            <select id="timeChooser">
              <option value="1" class="timeChooserOption">1m</option>
              <option value="10" class="timeChooserOption">10m</option>
              <option value="30" class="timeChooserOption">30m</option>
              <option value="60" class="timeChooserOption">1h</option>
              <option value="6000" class="timeChooserOption">1h+</option>
            </select>
        </div>
      </div>
    )
  }
}
