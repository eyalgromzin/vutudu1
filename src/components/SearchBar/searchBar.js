import React, { Component } from 'react'
import PlaceSelector from './placeSelector/placeSelector'
import NumOfPeopleSelector from './numOfPeopleSelector/numOfPeopleSelector'
import TimePicker from './timePicker/timePicker'
import MoreChooser from './moreChooser/moreChooser'
import SearchButton from './searchButton/searchButton'
import { connect } from 'react-redux';
import {SET_PLACE} from 'redux/types'
import {SET_TIME} from 'redux/types'
import {NEW_IDEA_SET_TIME} from 'redux/types'

const searchBarSearch = "SEARCH_BAR_SEARCH";
const searchBarCreate = "SEARCH_BAR_CREATE";

class SearchBar extends Component {
  constructor(props){
    super(props);
  }

  placeOnChangeEvent = (e) => {
    this.props.dispatch({type: SET_PLACE, payload: e.target.value});
  }

  timeOnChangeEvent = (e) => {
    this.props.dispatch({type: SET_TIME, payload: e.target.value});
  }

  render() {
    return (
      <div id="searchBar">
        <PlaceSelector onChangeEvent={this.placeOnChangeEvent} />
        <TimePicker onChangeEvent={this.timeOnChangeEvent} />
        <NumOfPeopleSelector />
        <MoreChooser />
        <SearchButton />
      </div>
    )
  }
}

export default connect()(SearchBar);