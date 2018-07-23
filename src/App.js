import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './redux/store'
import Place from './components/PlaceComponent'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        {/* <Counter/> */}
        <br />
        <br />
        <br />
        <Place />
      </div>
      </Provider>
    );
  }
}

export default App;
