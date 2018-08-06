import React, { Component } from 'react'
import PlaceSelector from './placeSelector/placeSelector'
import NumOfPeopleSelector from './numOfPeopleSelector/numOfPeopleSelector'
import TimePicker from './timePicker/timePicker'
import MoreChooser from './moreChooser/moreChooser'
import SearchButton from './searchButton/searchButton'

const searchBarSearch = "SEARCH_BAR_SEARCH";
const searchBarCreate = "SEARCH_BAR_CREATE";

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.searchBarType = props.searchBarType;
  }

  render() {
    return (
      <div id="searchBar">
        
        <PlaceSelector />
        <TimePicker />
        <NumOfPeopleSelector />
        <MoreChooser />
        <SearchButton />
      </div>
    )
  }
}
