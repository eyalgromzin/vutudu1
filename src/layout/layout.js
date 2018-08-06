import React, { Component } from 'react'
import './layout.css'
import logo from './logo.svg';
import './App.css';

// import Counter from './components/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import store from '../redux/store'
import TopBar from '../components/topBar/topBar'
import SearchBar from '../components/searchBar/searchBar'
import IdeaCard from '../components/ideaCard/ideaCard'
import CreateIdeaBar from '../components/searchBar/create/createIdeaBar/createIdeaBar'
import CreateIdeaCard from '../components/ideaCard/createIdeaCard'


export default class Layout extends Component {
  render() {
    return (
      <div>
        <div id="mainPage">
          <TopBar />
          <div class="mainContent">
          place: {this.props.place}
            {this.state.currentPage == showIdeaPage ? 
              <React.Fragment>
                <SearchBar />
                <IdeaCard />
              </React.Fragment> 
              :
              <React.Fragment>
                <CreateIdeaBar />
                <CreateIdeaCard />
              </React.Fragment>
            }
          </div>
        </div>
      </div>
    )
  }
}
