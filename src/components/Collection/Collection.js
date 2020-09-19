import React from 'react';
import isoFetch from 'isomorphic-fetch';
import MovieCard from '../MovieCards/MovieCard/MovieCard'
import './Collection.css';
import ButtonC from '../../containers/Button/ButtonC';
import Spinner from '../Spinner/Spinner';


class Collection extends React.Component {

    state = {
        selectedId: 0,
        currentValue: null
    }

    componentDidMount() {
        this.getMoviesCollection('isFuture');
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

    selectedButton = (id, value) => {
        this.setState({ selectedId: id });
    }

    render() {

        let cards = <Spinner />;

        if (this.props.movies) {
            cards = this.props.movies.map((m) => (
                <MovieCard movie={m} key={m.id} />
            ));
        }

        let buttons = ["Going to", "Watched", "Favourite"];


        return (
            <div className="allCollection__container">
                <div className="buttonsCollection__container">
                    {buttons.map((m, i) => <ButtonC title2={m} key={i} id={i} selectedId={this.state.selectedId} cbSelected={this.selectedButton} ></ButtonC>)}
                </div>

                <div className="collection__container">
                    {cards}
                </div>
            </div>
        );
    }

}

export default Collection;