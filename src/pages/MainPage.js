import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { moviesThunkAC } from "../redux/actions/moviesAC";

import MovieCards from '../components/MovieCards/MovieCards';

class MainPage extends React.PureComponent {

    static propTypes = {
        movies: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.dispatch(moviesThunkAC(this.props.dispatch));
    }

    render() {
        if (this.props.movies.status <= 1)
            return "загрузка...";

        if (this.props.movies.status === 2)
            return "ошибка загрузки данных";


        return (
            <div className="">
                <div>
                    <div className="searchBar-module__container">
                        searchBar
                    </div>
                </div>
                <div>
                    <MovieCards movies={this.props.movies.data} />
                </div>
            </div>
        );

    }

}

const mapStateToProps = function (state) {

    return {
        movies: state.movies
    };
};

export default connect(mapStateToProps)(MainPage);

