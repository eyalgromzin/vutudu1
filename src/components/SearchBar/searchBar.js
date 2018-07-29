import React, { Component } from 'react'
import PlaceSelector from './placeComponent/PlaceSelector'
import NumOfPeopleSelector from './numOfPeopleSelector/numOfPeopleSelector'
import TimePicker from './timePicker/timePicker'
import MoreChooser from './moreChooser/moreChooser'
import SearchButton from './searchButton/searchButton'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        search bar
        <PlaceSelector />
        <TimePicker />
        <NumOfPeopleSelector />
        <MoreChooser />
        <SearchButton />
      </div>
    )
  }
}
