import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import App from './containers/App.js';

let devTools = (f) => f;
if(process.env.NODE_ENV !== 'production'){
  if(window.devToolsExtension){
    devTools = window.devToolsExtension();
  }
}
const middleWares = compose(
  applyMiddleware(
    thunk,
  ),
  devTools
)
const initialState = {
  app: {
    loading: true
  }
}
const store = createStore(rootReducer, initialState, middleWares);

// Hot reloading
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers')
    store.replaceReducer(nextRootReducer)
  })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)