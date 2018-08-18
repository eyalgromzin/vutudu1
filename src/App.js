import React, { Component } from 'react';

import Layout from './layout/layout'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './redux/store'

export const showIdeaPage = 'SHOW_IDEA';
export const createIdeaPage = 'CREATE_IDEA';

class App extends Component {
  

  constructor(){
    super();

    //TODO: get current page from redux
    this.state = {
      currentPage: createIdeaPage,
      place: ''
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     currentPage: state.commonReducer.currentPage
//   };
// }

function mapStateToProps(state) {
  return {
    place: state.searchReducer.place
  };
}

export default App;
// export default App;
