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

const showIdeaPage = "SHOW_IDEA";
const createIdeaPage = "CREATE_IDEA";

class App extends Component {
  constructor(){
    this.state = {
      currentPage = createIdeaPage
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
              </React.Fragment> :
              <React.Fragment>
                <AddIdeaBar />
                <AddIdeaCard />
              </React.Fragment>
            }
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
