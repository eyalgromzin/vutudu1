import React, { Component } from 'react'
import '../searchBarCommonStyles.css'
import 'commonCss.css'
import './numOfPeopleCreator.css'
import { connect } from 'react-redux';
import { NEW_IDEA_SET_MIN_PEOPLE, NEW_IDEA_SET_MAX_PEOPLE } from 'redux/types'

class NumOfPeopleCreator extends Component {

  constructor(props){
    super(props);

    this.minNumOfPeopleChange = this.minNumOfPeopleChange.bind(this);
    this.maxNumOfPeopleChange = this.maxNumOfPeopleChange.bind(this);
  }

  minNumOfPeopleChange(event){
    this.props.dispatch({ type: NEW_IDEA_SET_MIN_PEOPLE, payload: event.target.value });
  }

  maxNumOfPeopleChange(event){
    this.props.dispatch({ type: NEW_IDEA_SET_MAX_PEOPLE, payload: event.target.value });
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

function mapStateToProps(state) {
  return {
    newIdea: state.ideasReducer.ideas[state.ideasReducer.currentIdeaIndex].likes,
  };
}

export default connect(mapStateToProps)(NumOfPeopleCreator);