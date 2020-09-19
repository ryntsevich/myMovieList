import React from 'react';
import Search from '../containers/Search/Search';
import MovieCardsC from '../containers/MovieCards/MovieCardsC';

class MainPage extends React.Component {

    render() {
        let localPage = localStorage.getItem('currentPage');
        return (
            <div className="">
                {localPage == 0 && <Search />}
                <MovieCardsC />
            </div>
        );
    }
}
export default MainPage;

