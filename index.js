import React from 'react';
import ReactDOM from 'react-dom';
import App from './scr/components/App/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combinedReducer from './scr/redux/store.js';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
// import { Route } from 'react-router-dom';


import './index.css';

let store = createStore(combinedReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('container')
);



// import { AppContainer } from 'react-hot-loader';


// import './index.css';

// function render(App) {
//   ReactDOM.render(
//     <AppContainer>
//       <Provider store={store}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </Provider>
//     </AppContainer>,
//     document.getElementById('root')
//   );
// }

// render(App);

// // Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./components/App/App', () => {
//     const NextRoot = require('./components/App/App').default;
//     render(NextRoot);
//   });
// }

