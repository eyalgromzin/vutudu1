import React, { Component } from 'react'
import IdeaAttachmentsButton from './cardButtons/addAttachmentButton/addAttachmentButton'
import IdeaPlace from './cardButtons/placeButton/placeButton'
import './createIdeaCard.css'

export default class CreateIdeaCard extends Component {
constructor(props){
  super(props);

  this.handleChange = this.handleChange.bind(this);
  this.handleCreateIdeaClick = this.handleCreateIdeaClick.bind(this);
}

  handleCreateIdeaClick(event) {
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <React.Fragment>
      <div id="createIdeaContainer">
        <div id="ideaCard"> 
          <div id="ideaCardContent">
            <input type="text" id="newIdeaTitle" placeholder="<title>" onchange={this.handleChange}/>
            <textarea type="text" id="newIdeaContent" placeholder="<content>" onchange={this.handleChange}/>
          </div>
        </div>
        <div class="alignRight">
          <div id="createIdeaButton" onClick={this.handleCreateIdeaClick}> create </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}
