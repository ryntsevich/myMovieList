import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <div className="nav_container">
        <NavLink to="/collection" exact className="PageLink" activeClassName="ActivePageLink">My Collection</NavLink>
        <NavLink to="/movies" className="PageLink" activeClassName="ActivePageLink">All Movies</NavLink>
        {/* <NavLink to="/chosenreceipts" className="PageLink" activeClassName="ActivePageLink">Избранные рецепты</NavLink> */}
      </div>
    );
    
  }

}
    
export default PagesLinks;
    