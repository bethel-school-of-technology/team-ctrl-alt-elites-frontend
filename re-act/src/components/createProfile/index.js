import React from 'react';
import context from 'react-bootstrap/esm/AccordionContext';

const CreateProfile = ({ handleSubmit, handleProfileChange, handleDescriptionChange }) => {

return (
    <div>
        <form onSubmit={context.handleSubmit} className="forms">
            <label htmlFor="profile" >Profile Name</label>
            <br />
            <input name="profile" onChange={context.handleTitleChange}></input>
            <br /> 
            <label htmlFor="description">Description of Profile</label>
            <br />
            <textarea
                rows="20"
                cols="50"
                name="description"
                onChange={context.handleDescriptionChange}></textarea>
            <br />
            <button className="btn" type="Submit">Create Profile</button>
        </form>
    </div>
)



}


export default CreateProfile;