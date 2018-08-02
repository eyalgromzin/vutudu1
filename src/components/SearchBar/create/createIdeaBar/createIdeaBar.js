import React, { Component } from 'react'

import PlaceCreator from './placeComponent/placeSelector'
import NumOfPeopleCreator from './numOfPeopleSelector/numOfPeopleSelector'
import TimeCreator from './timePicker/timePicker'
import MoreCreator from './searchButton/searchButton'

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
