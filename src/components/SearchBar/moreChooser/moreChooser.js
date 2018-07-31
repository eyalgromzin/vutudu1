import React, { Component } from 'react'
import './moreChooser.css'

export default class MoreChooser extends Component {
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
          <span class="searchBarText"> More... </span>
          <div>
            <input type="text" onChange={this.handleChange} />
          </div>
        </div>
      </div>
    )
  }
}
