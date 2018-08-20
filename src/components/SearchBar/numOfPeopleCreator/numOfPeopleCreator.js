import React, { Component } from 'react'
import '../searchBarCommonStyles.css'
import 'commonCss.css'
import './numOfPeopleCreator.css'
import { connect } from 'react-redux';
import { SET_MIN_PEOPLE, SET_MAX_PEOPLE } from 'redux/newIdeaReducer'

class NumOfPeopleCreator extends Component {

  constructor(props){
    super(props);

    this.minNumOfPeopleChange = this.minNumOfPeopleChange.bind(this);
    this.maxNumOfPeopleChange = this.maxNumOfPeopleChange.bind(this);
  }

  minNumOfPeopleChange(event){
    this.props.dispatch({ type: SET_MIN_PEOPLE, payload: event.target.value });
  }

  maxNumOfPeopleChange(event){
    this.props.dispatch({ type: SET_MAX_PEOPLE, payload: event.target.value });
  }

  render() {
    return (
      <div class="searchBarChooserContainer" > 
        <div class="searchBarChooserData">
          <img src={require("images/people.png")} class="searchBarIcon verticalMiddleAlign" />
          <input type="text" id="peopleCreatorFrom" class="verticalMiddleAlign" attributeName="minNumOfPeople"
              onChange={this.minNumOfPeopleChange} />
          -
          <input type="text" id="peopleCreatorTo" class="verticalMiddleAlign" attributeName="maxNumOfPeople"
               onChange={this.maxNumOfPeopleChange} />
        </div>
      </div>
    )
  }
}


export default connect()(NumOfPeopleCreator);