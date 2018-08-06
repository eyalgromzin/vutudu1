import { createStore } from 'redux';
import rootReducer from './RootReducer'

const store = createStore(
    rootReducer,
    //to support the chrome extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;