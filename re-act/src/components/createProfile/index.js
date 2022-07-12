import React from 'react';
import context from 'react-bootstrap/esm/AccordionContext';

const CreateProfile = ({ handleSubmit, handleProfileChange, handleImgChange, handleTypeChange, handleTimeChange, handleLocationChange, handleSummaryChange, handleDescriptionChange }) => {

return (
    <div>
        <form onSubmit={handleSubmit} className="forms">
            <label htmlFor="profile" >Profile Name</label>
            <br />
            <input name="profile" onChange={handleProfileChange}></input>
            <br />
            <label htmlFor="img" >Profile Image</label>
            <br />
            <input name="img" type="file" multiple accept="image/*" onChange={handleImgChange} />
            <br /> 
            <label htmlFor="type" >Type</label>
            <br />
            <input name="type" onChange={handleTypeChange}></input>
            <br /> 
            <label htmlFor="time" >Time</label>
            <br />
            <input name="time" onChange={handleTimeChange}></input>
            <br /> 
            <label htmlFor="location" >Location</label>
            <br />
            <input name="location" onChange={handleLocationChange}></input>
            <br /> 
            <label htmlFor="summary">Summary of Event</label>
            <br />
            <textarea
                rows="20"
                cols="50"
                name="summary"
                onChange={handleSummaryChange}></textarea>
            <br />
            <label htmlFor="description">Description of Event</label>
            <br />
            <textarea
                rows="20"
                cols="50"
                name="description"
                onChange={handleDescriptionChange}></textarea>
            <br />
            <button className="btn" type="Submit">Create Profile</button>
        </form>
    </div>
)



}


export default CreateProfile;