import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';




const FomoCreateProfile = () => {
    var [username, setUsername] = useState("");
    var [password, setPassword] = useState("");
    var [email, setEmail] = useState("");
    var [profile, setProfile] = useState("");
    var [image, setImage] = useState("");
    var [type, setType] = useState("");
    var [time, setTime] = useState("");
    var [location, setLocation] = useState("");
    var [price, setPrice] = useState("");
    var [summary, setSummary] = useState("");
    var [description, setDescription] = useState("");

//create
    const handleSubmit = async (e) =>{
        e.preventDefault();

        
        let newUsersData = await fetch("http://localhost:8080/api/auth/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password, email, profile, image, type, time, location, price, summary, description})
        })

        let newUsers = await newUsersData.json();
        
        
    console.log(newUsers);
}
return (
    <div style={{ margin: '1em' }} className='FomoCreateProfile'>
        <h2>Create New Profile</h2>
        <h6>create a new profile to showcase your venue and events</h6>
        <hr />
        <form onSubmit={handleSubmit}  className="form">
            <label className="form-label mt-4">Username</label>
            <br />
            <input name="username" onChange={e => setUsername(e.target.value)} />
            <br />
            <label className="form-label mt-4">Password</label>
            <br />
            <input name="password" onChange={e => setPassword(e.target.value)} />
            <br />
            <label className="form-label mt-4">Email</label>
            <br />
            <input name="email" onChange={e => setEmail(e.target.value)} />
            <br />
            <label className="form-label mt-4">Profile Name</label>
            <br />
            <input name="profile" onChange={e => setProfile(e.target.value)} />
            <br />
            <label className="form-label mt-4">Profile Image - input url</label>
            <br />
            <input name="image" /*type="file" multiple accept="image/*"*/ onChange={e => setImage(e.target.value)} />
            <br /> 
            <label className="form-label mt-4">Type</label>
            <br />
            <input name="type" onChange={e => setType(e.target.value)}/>
            <br /> 
            <label className="form-label mt-4">Time</label>
            <br />
            <input name="time" onChange={e => setTime(e.target.value)}/>
            <br /> 
            <label  className="form-label mt-4">Location</label>
            <br />
            <input name="location" onChange={e => setLocation(e.target.value)}/>
            <br /> 
            <label className="form-label mt-4">Price</label>
            <br />
            <input type="number" name="price" onChange={e => setPrice(e.target.value)}/>
            <br /> 
            <label className="form-label mt-4">Summary of Event</label>
            <br />
            <textarea
                rows="5"
                cols="50"
                name="summary"
                onChange={e => setSummary(e.target.value)}/>
            <br />
            <label className="form-label mt-4">Description of Event</label>
            <br />
            <textarea
                rows="20"
                cols="50"
                name="description"
                onChange={e => setDescription(e.target.value)}/>
            <br />
            <br />
            <button className="btn btn-dark" type="Submit"> {/*<Link to='/sr'>Create Profile</Link>*/} </button>
            
        </form>
        </div>
)
}


export default FomoCreateProfile;