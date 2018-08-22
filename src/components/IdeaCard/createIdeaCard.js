import React, { Component } from 'react'
import IdeaAttachmentsButton from './cardButtons/addAttachmentButton/addAttachmentButton'
import IdeaPlace from './cardButtons/placeButton/placeButton'
import './createIdeaCard.css'
import { connect } from 'react-redux';
import { addIdeaToDB } from 'db/dbHandler.js'

class CreateIdeaCard extends Component {
constructor(props){
  super(props);

  this.handleChange = this.handleChange.bind(this);
  this.handleCreateIdeaClick = this.handleCreateIdeaClick.bind(this);
  this.extractTagsFromContent= this.extractTagsFromContent.bind(this);
}

  handleCreateIdeaClick(event) {
    this.error = "";

    if(this.props.title == ""){
      this.isHasError = true;
      this.error += "missing <Title>,"
    }
    if(this.props.content == ""){
      this.isHasError = true;
      this.error = "missing <Content>,"
    }
    this.error = this.error.substring(0, this.error.length - 1);

    var tags = this.extractTagsFromContent()

    //addIdeaToDB(title, content, place,time,minNumOfPeople,maxNumOfPeople)
    addIdeaToDB(this.props.title,
                this.props.content,
                this.props.place,
                this.props.time,
                this.props.minNumOfPeople,
                this.props.maxNumOfPeople);
  }

  extractTagsFromContent(){
    

    var contentText = this.props.content;
    
    var words = contentText.split(" ");
    
    var tags = [];

    for (var i = 0; i < words.length - 1; i++) {
      if(words[i].startsWith("#")){
        tags.push(words[i]);
      }
    }

    return tags;
  }

  isHasError = false;

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
        {this.isHasError ? 
          <div id="newIdeaError"> </div>
          : 
          <React.Fragment />
        }
        <div id="newIdeaError"> </div>
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