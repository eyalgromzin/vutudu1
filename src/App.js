import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './redux/store'
import TopBar from './components/topBar/topBar'
import SearchBar from './components/searchBar/searchBar'
import IdeaCard from './components/ideaCard/ideaCard'
import CreateIdeaBar from './components/searchBar/create/createIdeaBar/createIdeaBar'
import CreateIdeaCard from './components/ideaCard/createIdeaCard'

export const showIdeaPage = 'SHOW_IDEA';
export const createIdeaPage = 'CREATE_IDEA';

class App extends Component {
  constructor(){
    super();

    //TODO: get current page from redux
    this.state = {
      currentPage: createIdeaPage
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div id="mainPage">
          <TopBar />
          <div class="mainContent">
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
      </Provider>
    );
  }
}

export default App;
