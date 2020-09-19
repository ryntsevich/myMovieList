import React from 'react';
import Profile from '../components/Profile/Profile';
import CollectionC from '../containers/Collection/CollectionC';

class CollectionPage extends React.Component {

    render() {
        return (
            <div>
                <Profile />
                <CollectionC />
            </div>
        )
    }

}

export default CollectionPage;
