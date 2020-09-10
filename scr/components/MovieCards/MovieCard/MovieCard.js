import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import  {moviesThunkAC}  from "../redux/actions/moviesAC";

class MovieCard extends React.PureComponent {

    static propTypes = {
        movies: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.dispatch(moviesThunkAC(this.props.dispatch));
    }

    render() {
        // if (this.props.movies.status <= 1)
        //     return "загрузка...";

        // if (this.props.movies.status === 2)
        //     return "ошибка загрузки данных";

        return (
            <div></div>
        );

    }

}

const mapStateToProps = function (state) {
    return {
        movies: state.movies
    };
};

export default connect(mapStateToProps)(MovieCard);

