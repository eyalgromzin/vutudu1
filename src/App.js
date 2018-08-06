import React, { Component } from 'react';

import Layout from './layout/layout'

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

    // this.props.currentPage = showIdeaPage
    // this.props.place = "asd"
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

export default connect(mapStateToProps)(App);
// export default App;
