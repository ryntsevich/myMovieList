import React from 'react';
import { connect } from 'react-redux';
import { searchMoviesAC, setMoviesAC } from '../../redux/actions/moviesAC';

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

    componentDidMount() {
        // console.log(this.props)
        // this.inputRef.current.focus();
    }

    state = {
        query: '',
        showOverlay: false,
        results: null,
        list: this.props.movies,
        // pathname: this.props.location.pathname,
        // page: 1,
    };


    onInputChangeHandler = (value) => {
        console.log(value)
        // this.setState({ query: event.target.value }, this.updateList);
    };
    // setNewTextRef = (ref) => {
    //     this.newTextRef=ref;
    //   };
    
    //   setNewText = () => {
    //     if ( this.newTextRef ) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
    //       let newText=this.newTextRef.value;
    //       this.setState({question:newText});
    //     }
    //   };

    updateList = () => {
        let updatedList = this.props.movies.slice();
        // console.log(updetedList)
        if (this.state.query) {
            console.log(this.state.query)
            let state = this.state.query.toLowerCase();
            // console.log(this.props.updateMovies)
            updatedList = updatedList.filter(item => {
                return item.title.includes(state);
            });
            // console.log(updetedList)
            // console.log(this.props.setMovies(updatedList))
            this.props.setMovies(updatedList)
        }

        // this.props.setMovies(this.state.query)

        // this.setState({ list: updatedList });
        // console.log(this.state.list)
    };



    render() {
        // console.log(this.state)


        return (
            <div>
                <SearchBar
                    value={this.state.query}
                    cbSearch={this.onInputChangeHandler}

                //   loading={!!this.props.loading && !!this.state.showOverlay}
                />
                {/* {this.state.showOverlay ? <Overlay>{results}</Overlay> : null} */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.moviesR.movies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMovies: (movies) => {
            dispatch(setMoviesAC(movies));
        }
        // searchMovies: (data) => {
        //     dispatch(searchMoviesAC(data));
        // }
    }
}

// export default Search;
export default connect(mapStateToProps, mapDispatchToProps)(Search);


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