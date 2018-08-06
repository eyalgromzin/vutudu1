import React, { Component } from 'react'

import PlaceSelector from '../../placeSelector/placeSelector'
import NumOfPeopleCreator from '../numOfPeopleCreator/numOfPeopleCreator'
import TimePicker from '../../timePicker/timePicker'
import MoreChooser from '../../moreChooser/moreChooser'

export default class CreateIdeaBar extends Component {
  render() {
    return (
      <div id="searchBar">
        <PlaceSelector />
        <TimePicker />
        <NumOfPeopleCreator />
        <MoreChooser />
      </div>
    )
  }
}
