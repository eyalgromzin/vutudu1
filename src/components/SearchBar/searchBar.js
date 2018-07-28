import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        search bar
        <PlaceSelector />
        <TimeSelector />
        <NumOfPeopleSelector />
        <Extras />
        <SearchButton />
      </div>
    )
  }
}
