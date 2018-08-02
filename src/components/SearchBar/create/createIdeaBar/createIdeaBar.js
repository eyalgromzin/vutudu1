import React, { Component } from 'react'
import PlaceSelector from './placeComponent/placeSelector'
import NumOfPeopleSelector from './numOfPeopleSelector/numOfPeopleSelector'
import TimePicker from './timePicker/timePicker'
import MoreChooser from './moreChooser/moreChooser'
import SearchButton from './searchButton/searchButton'

export default class SearchBar extends Component {
  render() {
    return (
      <div id="searchBar">
        <PlaceCreator />
        <TimeCreator />
        <NumOfPeopleCreator />
        <MoreCreator />
      </div>
    )
  }
}
