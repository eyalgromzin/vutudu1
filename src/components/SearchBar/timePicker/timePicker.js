import React, { Component } from 'react'
import './timePicker.css'
import '../searchBarCommonStyles.css'
import {NEW_IDEA_SET_TIME} from 'redux/types'

export default class TimePicker extends Component {
  constructor(props){
    super();

    this.handleOnChange = props.onChangeEvent;  
  }

  

  render() {
    return (
      <div class="searchBarChooserContainer" > 
        <div class="searchBarChooserData">
          <img src={require("images/time.png")} class="searchBarIcon verticalMiddleAlign" />
            <select id="timeChooser">
              <option value="5" class="timeChooserOption">5m</option>
              <option value="10" class="timeChooserOption">10m</option>
              <option value="15" class="timeChooserOption">15m</option>
              <option value="30" class="timeChooserOption">30m</option>
              <option value="60" class="timeChooserOption">1h</option>
              <option value="6000" class="timeChooserOption">1h+</option>
            </select>
        </div>
      </div>
    )
  }
}
