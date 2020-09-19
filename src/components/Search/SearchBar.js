import React from 'react';
import './SearchBar.css';

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
        this.props.search(str);
        this.props.searchMovies(str)
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
