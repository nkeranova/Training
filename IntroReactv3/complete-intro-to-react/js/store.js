// @flow

import { createStore, compose, applyMiddleware } from 'redux'; // add applyMiddleware
import thunk from 'redux-thunk'; // import
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk), // middleware
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

export default store;

// import { createStore, compose } from 'redux';
// import rootReducer from './reducers';
  
//   const store = createStore(reducer, compose)
  
//   export default store;