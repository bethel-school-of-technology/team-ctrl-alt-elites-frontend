import React from 'react';
import CreateProfile from '../createProfile';

const IProfiles = ({ profileData }) => {

console.log(profileData);
    return (
        <div>
            {profileData.map(profile => (
                <div>
                    <div key={profile.id}>
                    <h3>{profile.profile}</h3>
                    <img className="img" src={profile.img} />
                    <h6>{profile.type}</h6>
                    <h6>{profile.time}</h6>
                    <h6>{profile.location}</h6>
                    <p>{profile.price}</p>
                    <p>{profile.summary}</p>
                    <p><small>{profile.description}</small></p>
                </div>
                </div>
            ))}
        </div>
    )
}

export default IProfiles;