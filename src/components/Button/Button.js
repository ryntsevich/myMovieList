import React from 'react';
import isoFetch from 'isomorphic-fetch';
import './Button.css';


class Button extends React.Component {

    selectButton = () => {
        this.props.cbSelected(this.props.id);
        this.props.setCurrentTitle(this.props.title2)

        this.props.title2 == "Watched" && this.getMoviesCollection('isPast');
        this.props.title2 == "Going to" && this.getMoviesCollection('isFuture');
        this.props.title2 == "Favourite" && this.getMoviesCollection('isFavourite');

    }

    getMoviesCollection = (status) => {

        isoFetch(`http://localhost:4000/data?${status}=true`, {
            method: 'get'
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("fetch error " + response.status);
                else
                    return response.json();

            })
            .then(movies => {
                this.props.setMovies(movies);
            })
            .catch(error => {
                this.fetchError(error.message);
            })
            ;
    }
    fetchError = (errorMessage) => {
        console.error(errorMessage);
    }

    render() {

        return (
            <input type="button" id={this.props.id} className={(this.props.selectedId == this.props.id) ? 'btn selected' : 'btn'} value={this.props.title2} onClick={() => this.selectButton()} ></input>
        );
    }
}

export default Button;