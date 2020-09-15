import React from 'react';
import MainPage from '../../pages/MainPage';
import MoviePage from '../../pages/MoviePage';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {

    return (
      <div>
        <h1>My Movie</h1>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/movie/:movieId' component={MoviePage} />
        </Switch>
      </div>
    );

  }
}

export default App;
