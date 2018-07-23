import React, { Component } from 'react'
import {SET_PLACE} from '../redux/Types'
import { connect } from 'react-redux';

class PlaceComponent extends Component {
  constructor(){
    super();

    this.state = {
      place: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSetPlaceClick = this.handleSetPlaceClick.bind(this);
  }

  handleSetPlaceClick = () => {
    this.props.dispatch({ type: SET_PLACE, payload: this.state.place });
  }

  handleChange(event) {
    this.setState({place: event.target.value});
  }

  render() {
    return (
      <div>
        place: 
        <input type="text" 
        onChange={this.handleChange}
        value={this.state.place} />
        <button onClick={this.handleSetPlaceClick}>Set Place</button>
        <br /><br />
        place: {this.props.place}
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      place: state.searchReducer.place
    };
  }

export default connect(mapStateToProps)(PlaceComponent);