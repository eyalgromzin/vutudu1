import React, { Component } from 'react'
import './searchButton.css'
import '../searchBarCommonStyles.css'
import { connect } from 'react-redux';
import {searchInDB} from 'db/dbHandler.js'

class SearchButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      place: 'bus station',
      time: 5,
      numOfPeople: 1,
      more: '#productive'      
    }

    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchClick(){
    //get from redux the search criterias - done by map state to props
    //get from the DB results according to this criteria
    var results = searchInDB(this.props.place,this.props.time,this.props.numOfPeople,this.props.more);

    //save to redux all current ideas
    

    //load ideas in the page.
  }

  render() {
    return (
      <div class="displayInlineBlock" id="searchButton" onClick={this.handleSearchClick}>
        search
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      place: state.searchReducer.place,
      time: state.searchReducer.time,
      numOfPeople: state.searchReducer.numOfPeople,
      more: state.searchReducer.more,
    };
  }

  export default connect(mapStateToProps)(SearchButton);
