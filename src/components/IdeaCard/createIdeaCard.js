import React, { Component } from 'react'
import IdeaAttachmentsButton from './cardButtons/addAttachmentButton/addAttachmentButton'
import IdeaPlace from './cardButtons/placeButton/placeButton'
import './createIdeaCard.css'
import { connect } from 'react-redux';
import { addIdeaToDB } from 'db/dbHandler.js'
import { NEW_IDEA_SET_TITLE,NEW_IDEA_SET_CONTENT } from 'redux/types'
import 'commonCss.css'

class CreateIdeaCard extends Component {
constructor(props){
  super(props);

  this.handleChange = this.handleChange.bind(this);
  this.handleCreateIdeaClick = this.handleCreateIdeaClick.bind(this);
  this.extractTagsFromContent= this.extractTagsFromContent.bind(this);
  this.handleOnTitleChange= this.handleOnTitleChange.bind(this);
  this.handleOnContentChange= this.handleOnContentChange.bind(this);

  this.state={
    error:"",
    isHasError: false
  }
}

  handleCreateIdeaClick(event) {
    this.error = "";

    if(this.props.title == ""){
      this.isHasError = true;
      this.error += "missing <Title>, "
    }
    if(this.props.content == ""){
      this.isHasError = true;
      this.error = "missing <Content>, "
    }
    if(this.props.place == ""){
      this.isHasError = true;
      this.error += "missing place, "
    }
    if(this.props.minTime == ""){
      this.isHasError = true;
      this.error += "missing time, "
    }
    if(this.props.minNumOfPeople == ""){
      this.isHasError = true;
      this.error += "missing min num of people, "
    }
    if(this.props.maxNumOfPeople == ""){
      this.isHasError = true;
      this.error += "missing max num of people, "
    }

    this.error = this.error.substring(0, this.error.length - 2);

    var tags = this.extractTagsFromContent()

    //addIdeaToDB(title, content, place,time,minNumOfPeople,maxNumOfPeople)
    addIdeaToDB(this.props.title,
                this.props.content,
                this.props.place,
                this.props.minTime,  //undefined
                this.props.minNumOfPeople,
                this.props.maxNumOfPeople);
  }

  extractTagsFromContent(){
    var contentText = this.props.content;
    var words = contentText.split(" ");
    var tags = [];

    for (var i = 0; i < words.length; i++) {
      if(words[i].startsWith("#")){
        tags.push(words[i]);
      }
    }

    return tags;
  }

  isHasError = false;

  handleOnTitleChange(e){
    this.props.dispatch({type: NEW_IDEA_SET_TITLE, payload: e.target.value});
  }

  handleOnContentChange(e){
    this.props.dispatch({type: NEW_IDEA_SET_CONTENT, payload: e.target.value});
  }

  handleChange(event) {
    // this.setState({value: event.target.value})
  }

  render() {
    return (
      <React.Fragment>
      <div id="createIdeaContainer">
        <div id="ideaCard"> 
          <div id="ideaCardContent">
            <input type="text" id="newIdeaTitle" placeholder="<title>" onChange={this.handleOnTitleChange}/>
            <textarea type="text" id="newIdeaContent" placeholder="<content>" onChange={this.handleOnContentChange}/>
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

export default connect(mapStateToProps)(CreateIdeaCard);