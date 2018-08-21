import React, { Component } from 'react'
import IdeaAttachmentsButton from './cardButtons/addAttachmentButton/addAttachmentButton'
import IdeaPlace from './cardButtons/placeButton/placeButton'
import './createIdeaCard.css'
import { connect } from 'react-redux';

class CreateIdeaCard extends Component {
constructor(props){
  super(props);

  this.handleChange = this.handleChange.bind(this);
  this.handleCreateIdeaClick = this.handleCreateIdeaClick.bind(this);
  this.extractTagsFromContent= this.extractTagsFromContent.bind(this);
}

  handleCreateIdeaClick(event) {
    var tags = this.extractTagsFromContent()

  }

  extractTagsFromContent(){
    var contentText = this.props.content;

    var words = contentText.split(" ");
    
    for (var i = 0; i < words.length - 1; i++) {
      
    }

    return ["tag1","tag2"];
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

function mapStateToProps(state) {
  
  return {
    title: state.newIdeaReducer.title,
    content: state.newIdeaReducer.content,
    minTime: state.newIdeaReducer.minTime,
    maxTime: state.newIdeaReducer.maxTime,
    minNumOfPeople: state.newIdeaReducer.minNumOfPeople,
    maxNumOfPeople: state.newIdeaReducer.maxNumOfPeople,
    place: state.newIdeaReducer.place,
  };
}

export default connect()(CreateIdeaCard);