import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Link, useParams } from 'react-router-dom';

const EditProfile = () => {

  const [owners, setOwners] = useState({
    profile: "",
    img: "",
    type: "",
    time: "",
    location: "",
    price: "",
    summary: "",
    description: ""
  });
  let { id } = useParams();
  
  const updateProfile = (e) => {
    e.preventDefault();
    console.log(owners);
  }

  useEffect(() => {

    //62d7cb0911df47658e80d4c6
    //set to users instead
    //cant find a get user by id route 
    const url = `http://localhost:8080/owners/${id}`;
    
    axios.get(url).then(result => {
      console.log(result)
      setOwners(result.data.data.owner);
    }, err => { 
      console.log('error', err);
    });
}, [id]);

return (
<div style={{ margin: '1em' }}>
  <h2>Edit Profile</h2>
  <hr />
  <div>
  <form onSubmit={ updateProfile }  className="form">

            <label className="form-label mt-4">Profile Name</label>
            <br />
            <input name="profile" value={ owners.profile} onChange={ e => 
              setOwners({ ...owners, profile: e.target.value }) }/>
            <br />
            <label className="form-label mt-4">Profile Image - input url</label>
            <br />
            <input name="img" /*type="file" multiple accept="image/*"*/ value={ owners.img} onChange={e => setOwners({ img: e.target.value})} />
            <br /> 
            <label className="form-label mt-4">Type</label>
            <br />
            <input name="type" value={ owners.type} onChange={e => 
              setOwners({ ...owners, type: e.target.value })}/>
            <br /> 
            <label className="form-label mt-4">Time</label>
            <br />
            <input name="time" value={ owners.time} onChange={e => 
              setOwners({ ...owners, time: e.target.value })}/>
            <br /> 
            <label  className="form-label mt-4">Location</label>
            <br />
            <input name="location" value={ owners.location} onChange={e => 
              setOwners({ ...owners, location: e.target.value })}/>
            <br /> 
            <label className="form-label mt-4">Price</label>
            <br />
            <input type="number" name="price"value={ owners.price} onChange={e => 
              setOwners({ ...owners, price: e.target.value })}/>
            <br /> 
            <label className="form-label mt-4">Summary of Event</label>
            <br />
            <textarea
                rows="5"
                cols="50"
                name="summary"
                value={ owners.summary}
                onChange={e => 
                setOwners({ ...owners, sumary: e.target.value })}/>
            <br />
            <label className="form-label mt-4">Description of Event</label>
            <br />
            <textarea
                rows="10"
                cols="50"
                name="description"
                value={ owners.description}
                onChange={e => 
                setOwners({ ...owners, description: e.target.value })}/>
            <br />
            <br />
            <button className="btn btn-dark" type="Submit">Update</button>
        </form>
  <Link to={ `/${owners.id}` }> Back to Profile </Link>
  </div>
  <br />
  <div  className="d-flex align-items-end justify-content-center" style={{height: "200px"}} >
    <h1 className="mt-auto" ><Link to="/">FOMO</Link></h1>
  </div>
</div>

);
};

export default EditProfile;
