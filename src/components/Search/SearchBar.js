import React from 'react';
// import { Link } from 'react-router-dom';
// import { LANDING } from '../../constants/routes';
import PropTypes from 'prop-types';

import './SearchBar.css';
// import Spinner from '../Spinner/Spinner';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);    
        this.inputRef = React.createRef();
      }

      componentDidMount() {
        this.inputRef.current.focus();
    }

    search = () => { 
        let str = this.inputRef.current.value;
        this.inputRef.current.value = '';
        // this.props.dispatch( bookSearch(str) );
        this.props.search(str);
        this.props.searchMovies(str)
        console.log(this.props)
    }

    render() {
        return (
            <div className="searchBar__container">
                <input className="searchBar__input" type="text" ref={this.inputRef} placeholder="Search..." />
                <input className="searchBar__button" type="button" value="Search" onClick={this.search} />
            </div>
        );
    }
}

export default SearchBar;
