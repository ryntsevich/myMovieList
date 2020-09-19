import React from 'react';
import Collection from '../components/Collection/Collection';
import Profile from '../components/Profile/Profile';
import ButtonCollectoinC from '../containers/Button/ButtonC';
import CollectionC from '../containers/Collection/CollectionC';


class CollectionPage extends React.Component {

    render() {
        return (
            <div>
                <Profile />
                {/* <ButtonCollectoinC /> */}
                <CollectionC />
            </div>
        )
    }

}

export default CollectionPage;
