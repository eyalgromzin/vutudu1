import { createStore } from 'redux';
import SearchReducer from './SearchReducer'

const store = createStore(
    SearchReducer,
    //to support the chrome extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;