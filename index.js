import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combinedReducer from './src/redux/store.js';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';


import './index.css';
// , applyMiddleware(thunk)
let store = createStore(combinedReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('container')
);
