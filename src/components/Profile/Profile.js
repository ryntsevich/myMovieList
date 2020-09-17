import React from 'react';
import './Profile.css';


 const Profile = () => {
    return (
        <div className="profile__container">
            <div className="profile__img">
                <img src="https://i.ibb.co/NxvS4s9/user1.png" alt="" style={{width: '160px'}} />
            </div>
            <div className="profile__details">
                <h1 className="name">DeCaprio</h1>
                <p className="city">Minsk</p>
                <p className="gender">Man, 30</p>
                {/* <p className="age">30</p> */}
            </div>
        </div>

    );
}

export default Profile;