import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {

  render() {

    return (
      <div className="nav_container">
        <NavLink to="/collection" exact className="PageLink" activeClassName="ActivePageLink">My Collection</NavLink>
        <NavLink to="/movies" exact className="PageLink" activeClassName="ActivePageLink">All Movies</NavLink>
      </div>
    );
  }
}

export default PagesLinks;
