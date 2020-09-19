import React from 'react';
import MainPage from '../../pages/MainPage';
import MoviePage from '../../pages/MoviePage';
import { Route, Switch, NavLink } from 'react-router-dom';
import MovieCardsC from '../../containers/MovieCards/MovieCardsC';
import MovieC from '../../containers/Movie/MovieC';
import CollecttionPage from '../../pages/CollectionPage';
import Profile from '../../components/Profile/Profile';
import PagesLinks from '../../pages/PagesLinks';

class App extends React.Component {

  render() {

    return (
      <div>
        <h1>My Movies</h1>
        <PagesLinks />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/movies/:movieId' component={MovieC} />
          <Route path='/movies' exact component={MainPage} />
          <Route path='/collection' component={CollecttionPage} />
        </Switch>
      </div>
    );

  }
}

export default App;
