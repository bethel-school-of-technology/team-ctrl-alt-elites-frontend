import React from 'react';
import CreateProfile from '../createProfile';

const AllProfiles = ({ profileData }) => {

console.log(profileData)

return (
    <div>
        <CreateProfile />
        {profileData.map(profile => (
            <div key={profile.id}>
                <h3>{profile.profile}</h3>
            </div>
        ))}
    </div>
)



}


export default AllProfiles;