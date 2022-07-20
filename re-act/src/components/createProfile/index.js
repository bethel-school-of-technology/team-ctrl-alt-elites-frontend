import React from 'react';
import context from 'react-bootstrap/esm/AccordionContext';

const CreateProfile = ({ handleSubmit, handleProfileChange, handleImgChange, handleTypeChange, handleTimeChange, handleLocationChange, handleSummaryChange, handleDescriptionChange }) => {

return (
    <div>
        <form onSubmit={handleSubmit}  className="form">
            <label htmlFor="profile" className="form-label mt-4">Profile Name</label>
            <br />
            <input name="profile" onChange={handleProfileChange}></input>
            <br />
            <label htmlFor="img" className="form-label mt-4">Profile Image - input url</label>
            <br />
            <input name="img" /*type="file" multiple accept="image/*"*/ onChange={handleImgChange} />
            <br /> 
            <label htmlFor="type" className="form-label mt-4">Type</label>
            <br />
            <input name="type" onChange={handleTypeChange}></input>
            <br /> 
            <label htmlFor="time" className="form-label mt-4">Time</label>
            <br />
            <input name="time" onChange={handleTimeChange}></input>
            <br /> 
            <label htmlFor="location" className="form-label mt-4">Location</label>
            <br />
            <input name="location" onChange={handleLocationChange}></input>
            <br /> 
            <label htmlFor="summary"className="form-label mt-4">Summary of Event</label>
            <br />
            <textarea
            
                rows="5"
                cols="50"
                name="summary"
                onChange={handleSummaryChange}></textarea>
            <br />
            <label htmlFor="description" className="form-label mt-4">Description of Event</label>
            <br />
            <textarea
                rows="20"
                cols="50"
                name="description"
                onChange={handleDescriptionChange}></textarea>
            <br />
            <br />
            <button className="btn btn-dark" type="Submit">Create Profile</button>
        </form>
        <br />
    </div>
)
}


export default CreateProfile;