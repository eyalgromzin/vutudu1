import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './redux/store'
import Place from './components/PlaceComponent'
import TopBar from './components/TopBar/topBarComponent'
import SearchBar from './components/SearchBar/searchBarComponent'
import IdeaCard from './components/IdeaCard/ideaCardComponent'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="mainPage">
          <TopBar />
          <SearchBar />
          <IdeaCard />
          <CreateIdeaButton />
        </div>
      </Provider>
    );
  }
}

export default App;
