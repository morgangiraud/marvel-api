import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

const initialState = {
  app: {
    loading: true
  }
}
const store = createStore(rootReducer, initialState);

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
    <div>Hello world, app is currently {initialState.app.loading ? "loading" : "loaded"}</div>
  </Provider>,
  document.getElementById('root')
)