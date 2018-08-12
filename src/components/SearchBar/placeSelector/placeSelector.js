import React, { Component } from 'react'
import './placeSelector.css';
import '../searchBarCommonStyles.css'

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
      <div class="searchBarChooserContainer">
        <div class="searchBarChooserData">
          <div>
            <img src={require("images/placeIcon.png")} class="searchBarIcon" />
            <input id="placeInput" placeholder="place (park)" type="text" onChange={this.handleChange}  />
          </div>
        </div>
      </div>
    )
  }
}
