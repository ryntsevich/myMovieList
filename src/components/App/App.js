import React from 'react';
import MainPage from '../../pages/MainPage';
import MoviePage from '../../pages/MoviePage';
import { Route, Switch, Link } from 'react-router-dom';
import MovieCardsC from '../../containers/MovieCards/MovieCardsC';
import MovieC from '../../containers/Movie/MovieC';
import CollecttionPage from '../../pages/CollectionPage';

class App extends React.Component {

  render() {

    return (
      <div>
        <h1>My Movie</h1>
        <Link to='/collection'> <div>My collection</div> </Link>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/movies' exact component={MainPage} />
          <Route path='/:2' exact component={MainPage} />
          <Route path='/movie' exact component={MovieC} />
          <Route path='/movie/:movieId' component={MovieC} />
          <Route path='/collection' component={CollecttionPage} />
        </Switch>
      </div>
    );

  }
}

export default App;
