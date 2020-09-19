import React from 'react';
import MainPage from '../../pages/MainPage';
import { Route, Switch} from 'react-router-dom';
import MovieC from '../../containers/Movie/MovieC';
import CollecttionPage from '../../pages/CollectionPage';
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
