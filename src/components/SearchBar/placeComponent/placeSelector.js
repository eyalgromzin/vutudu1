import React, { Component } from 'react'
import './placeSelector.css';

export default class PlaceSelector extends Component {
  constructor(){
    super();

    this.state = {
      place: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({place: event.target.value});
  }

  render() {
    return (
      <div class="searchBarChooserContainer" > 
        <div class="searchBarChooserData">
          <img src={require("images/placeIcon.png")} class="searchBarIcon" />
          <span class="searchBarText"> Place </span>
          <div>
            <input type="text" onChange={this.handleChange} />
          </div>
        </div>
      </div>
    )
  }
}
