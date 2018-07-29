import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './redux/store'
import Place from './components/PlaceComponent'
import TopBar from './components/topBar/topBar'
import SearchBar from './components/searchBar/searchBar'
import IdeaCard from './components/ideaCard/ideaCard'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="mainPage">
          <TopBar />
          <SearchBar />
          <IdeaCard />
        </div>
      </Provider>
    );
  }
}

export default App;
