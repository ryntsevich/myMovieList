import React from 'react';
import Collection from '../components/Collection/Collection';
import Profile from '../components/Profile/Profile';


class CollectionPage extends React.Component {

    render() {
        return (
            <div>
            <Profile />
            <Collection />
            </div>
        )
    }

}

export default CollectionPage;
