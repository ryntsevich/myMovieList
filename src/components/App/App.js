import React from 'react';
import MainPage from '../../pages/MainPage';
import MoviePage from '../../pages/MoviePage';
import { Route, Switch } from 'react-router-dom';
import MovieCardsC from '../../containers/MovieCards/MovieCardsC';
import MovieC from '../../containers/Movie/MovieC';

class App extends React.Component {

  render() {

    return (
      <div>
        <h1>My Movie</h1>
        <Switch>
          <Route path='/' exact component={MainPage} />
          {/* <Route path='/' exact component={MovieCardsC} /> */}


          <Route path='/movie/:movieId' component={MovieC} />
        </Switch>
      </div>
    );

  }
}

export default App;
