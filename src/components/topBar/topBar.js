import React, { Component } from 'react'
import './topBar.css'
import 'commonCss.css'
import { CHANGE_PAGE_TO_CREATE_IDEA } from 'redux/CommonReducer'
import { CHANGE_PAGE_TO_SHOW_IDEAS } from '../../redux/CommonReducer';
import { connect } from 'react-redux';

class TopBar extends Component {
  constructor(props){
    super(props);

    this.handleNewIdeaClick = this.handleNewIdeaClick.bind(this);
    this.handleShowIdeasClick = this.handleShowIdeasClick.bind(this);
    this.changePageToCreateIdea = this.changePageToCreateIdea.bind(this);
    this.changePageToShowIdeas = this.changePageToShowIdeas.bind(this);
  }

  handleNewIdeaClick(){
    this.changePageToCreateIdea();
  }

  handleShowIdeasClick(){
    this.changePageToShowIdeas();
  }

  changePageToCreateIdea = () => {
    this.props.dispatch({ type: "CHANGE_PAGE_TO_CREATE_IDEA" });
  }

  changePageToShowIdeas = () => {
    this.props.dispatch({ type: "CHANGE_PAGE_TO_SHOW_IDEAS" });
  }

  render() {
    return (
      <div id="TopBar mainContent">
        <div class="mainContent"> 
          <img src={require("images/logo.png")} class="topBarLogo verticalMiddleAlign" />
          VUTUDU2
          <img src={require("images/newIdea.png")} class="topBarIcon verticalMiddleAlign alignRight" onClick={this.handleNewIdeaClick} />
          <img src={require("images/newIdea.png")} class="topBarIcon verticalMiddleAlign alignRight" onClick={this.handleShowIdeasClick} />
        </div>
      </div>  
    )
  }
}

export default connect()(TopBar);