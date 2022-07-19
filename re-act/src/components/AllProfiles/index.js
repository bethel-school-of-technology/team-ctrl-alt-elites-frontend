import React from 'react';
import CreateProfile from '../createProfile';

const AllProfiles = ({ profileData, handleSubmit, handleProfileChange, handleImgChange, handleTypeChange, handleTimeChange, handleLocationChange, handleSummaryChange, handleDescriptionChange }) => {


    return (
        <div>
            <CreateProfile handleSubmit={handleSubmit} handleProfileChange={handleProfileChange} handleImgChange={handleImgChange} handleTypeChange={handleTypeChange} handleTimeChange={handleTimeChange} handleLocationChange={handleLocationChange} handleSummaryChange={handleSummaryChange} handleDescriptionChange={handleDescriptionChange} />
            {profileData.map(profile => (
                <div key={profile.id}>
                    <h3>{profile.profile}</h3>
                </div>
            ))}
        </div>
    )



}


export default AllProfiles;