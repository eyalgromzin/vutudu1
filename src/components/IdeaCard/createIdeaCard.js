import React, { Component } from 'react'
import IdeaAttachmentsButton from './cardButtons/addAttachmentButton/addAttachmentButton'
import IdeaPlace from './cardButtons/placeButton/placeButton'
import './createIdeaCard.css'

export default class CreateIdeaCard extends Component {
constructor(props){
  super(props);

  this.state ={
    
  }

  this.handleChange = this.handleChange.bind(this);
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
            <input type="text" id="newIdeaTitle" value={this.state.title} placeholder="<title>" onchange={this.handleChange}/>
            <textarea type="text" id="newIdeaContent" value={this.state.content} placeholder="<content>" onchange={this.handleChange}/>
          </div>
        </div>
        <div class="alignRight">
          <div id="createIdeaButton"> create </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}
