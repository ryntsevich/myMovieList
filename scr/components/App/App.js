import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import combinedReducer from '../../redux/store.js';
// import CounterButton from '../components/CounterButton';
// import MovieList from '../MovieCards.js';
import MainPage from '../../pages/MainPage.js';

// let store = createStore(combinedReducer, applyMiddleware(thunk));


class App extends React.PureComponent {

  render() {

    return (
        <div>
          <h1>My Movie</h1>
          <MainPage />
          {/* <CounterButton counterid={111} /> */}
          {/* <CounterButton counterid={222} /> */}
        </div>
    );

  }

}

export default App;
