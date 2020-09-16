import React from 'react';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { compose } from 'recompose';

// import { search } from '../../store/actions';
import SearchBar from '../../components/Search/SearchBar';
// import MovieCards from '../../components/MovieCards/MovieCards';
// import Overlay from '../../components/Overlay/Overlay';
// import { addGenres } from '../../utils';
// import withLoading from '../../hoc/withLoad/ing';
// import withPaginated from '../../hoc/withPaginated/withPaginated';

class Search extends React.Component {
    state = {
        query: '',
        showOverlay: false,
        results: null
        // pathname: this.props.location.pathname,
        // page: 1,
    };

    onInputChangeHandler = event => {
        this.setState({ query: event.target.value }, this.updateList);
    };

    updateList = () => {
        let updetedList = this.props.movies.data.slice();
        // console.log(updetedList)
        if (this.state.query) {
            let state = this.state.query.toLowerCase();
            console.log(this.props.updateMovies)
            updetedList = updetedList.filter(item => {
                return item.title.toLowerCase().indexOf(state) !== -1;
            });
            // console.log(updetedList)
        }

        // this.setState({ list: updetedList });
    };



    render() {


        return (
            <div>
                <SearchBar
                    value={this.state.query}
                    onChange={this.onInputChangeHandler}
                //   loading={!!this.props.loading && !!this.state.showOverlay}
                />
                {/* {this.state.showOverlay ? <Overlay>{results}</Overlay> : null} */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        updateMovies: state.updateList
    };
};

// export default Search;
export default connect(mapStateToProps)(Search);


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { search } from '../../redux/actions/searchAC';

// class Search extends Component {
//     render() {
//         const { search, value } = this.props;

//         return (
//             <input
//                 className="form-control"
//                 placeholder="Procurar Trabalho"
//                 onChange={(e) => search(e.target.value)}
//                 value={value} />
//         );
//     }
// }

// function mapStateToProps({ works }) {
//     return { value: works.value };
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ search }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Search);