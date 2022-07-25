import React from 'react';
import CreateProfile from '../createProfile';

const AllProfiles = ({ profileData, handleSubmit, handleProfileChange, handleImgChange, handleTypeChange, handleTimeChange, handleLocationChange, handleSummaryChange, handleDescriptionChange }) => {


    return (
        <div>
            <CreateProfile handleSubmit={handleSubmit} handleProfileChange={handleProfileChange} handleImgChange={handleImgChange} handleTypeChange={handleTypeChange} handleTimeChange={handleTimeChange} handleLocationChange={handleLocationChange} handleSummaryChange={handleSummaryChange} handleDescriptionChange={handleDescriptionChange} />
            {profileData.map(profile => (
                <div key={profile.id}>
                    <h3>{profile.profile}</h3>
                    <img className="img" alt={""} src={profile.img}/>
                    <h6>{profile.type}</h6>
                    <h6>{profile.time}</h6>
                    <h6>{profile.location}</h6>
                    <p>{profile.price}</p>
                    <p>{profile.summary}</p>
                    <p><small>{profile.description}</small></p>
                </div>
            ))}
        </div>
    )
}

export default AllProfiles;