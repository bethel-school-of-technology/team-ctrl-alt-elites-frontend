import React, { useEffect, useState, useContext } from 'react';
import './pap.css';


function App() {
    useEffect(() => {
        document.title = "FOMO"
    }, [])
    //will be id
    var [isEdit, setIsEdit] = useState("");
    //all owners
    var [users, setUsers] = useState([]);
    //for editing owners
    var [users, setUsers] = useState([]);
  
    var [profile, setProfile] = useState("");
    var [img, setImg] = useState("");
    var [type, setType] = useState("");
    var [time, setTime] = useState("");
    var [location, setLocation] = useState("");
    var [price, setPrice] = useState("");
    var [summary, setSummary] = useState("");
    var [description, setDescription] = useState("");
  
    //get all owners from mongo db
    useEffect(() => {
      const getAllUsers = async () => {
        let usersData = await fetch("http://localhost:8080/users")
        let usersProfiles = await usersData.json();
        //console.log(ownersProfiles);
       setUsers(usersProfiles.data.users);
      }
   getAllUsers();
  }, []);

//create
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let newUserData = await fetch("http://localhost:8080/users/add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({profile, img, type, time, location, price, summary, description})
        })
        let newUser = await newUserData.json();

    console.log(newUser);
}
return (
    <div className='App'>
        <form onSubmit={handleSubmit}  className="form">
            <label className="form-label mt-4">Profile Name</label>
            <br />
            <input name="profile" onChange={e => setProfile(e.target.value)} />
            <br />
            <label className="form-label mt-4">Profile Image - input url</label>
            <br />
            <input name="img" /*type="file" multiple accept="image/*"*/ onChange={e => setImg(e.target.value)} />
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
            <button className="btn btn-dark" type="Submit">Create Profile</button>
        </form>

        {users.map((users, idx) => {
            return(
                <div key={idx}>
                    <h3>{users.username}</h3>
                    <h3>{users.email}</h3>
                    <h3>{users.profile}</h3>
                    <img className="img" src={users.img}></img>
                    <h6>{users.type}</h6>
                    <h6>{users.time}</h6>
                    <p>{users.location}</p>
                    <p>{users.price}</p>
                    <p>{users.summary}</p>
                    <p>{users.description}</p>
                </div>
            )
        })}
    </div>
)
}

export default App;