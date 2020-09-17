import React from 'react';
import MovieCardsC from '../../containers/MovieCards/MovieCardsC';


class Collection extends React.Component {

    render() {

        return (
            <div>
                <div className="buttonsCollection__container">
                    <button className="btn">Going to</button>
                    <button className="btn">Watched</button>
                    <button className="btn">Favourite</button>
                </div>
                <MovieCardsC />
            </div>

        );


    }

}

export default Collection;