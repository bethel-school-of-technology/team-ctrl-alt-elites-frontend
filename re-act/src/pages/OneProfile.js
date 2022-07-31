import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Link, useParams } from 'react-router-dom';

const One = () => {

  const [users, setUsers] = useState({});
  let { id } = useParams();
  
  useEffect(() => {

    //62d7cb0911df47658e80d4c6
    //set to users instead
    //cant find a get user by id route 
    const url = `http://localhost:8080/users/${id}`;
    
    axios.get(url).then(result => {
      console.log(result)
      setUsers(result.data.data.user);
    }, err => { 
      console.log('error', err);
    });
}, []);

return (
<div style={{ margin: '1em' }}>
  <div>
  <h2>{users.profile}</h2>
  <br />
  <h6>{users.summary}</h6>
  <hr />
  <div >
    <div >
      <img className="imgone" style={{ width: "80%"  }} src={users.image}></img>
  </div>
  <div>
      <h6>Type: {users.type}</h6>
      <h6>Time: {users.time}</h6>
      <h6>Location: {users.location}</h6>
      <p>Price: ${users.price}</p>
  <br />
      <p>{users.description}</p>
  </div>
  </div>
  </div>
 
  <br />
  
    <Link role="button" to={ `/${users._id}/edit` } className="btn btn-primary d-flex justify-content-center " style={{ width: '100%'}}>Edit</Link>
    
  <div className= "d-flex align-items-end ">
    
    </div>
    <br />
  <div  className="d-flex  justify-content-center"  >
    <div>
    <h1 className="mt-auto" ><Link to="/">FOMO</Link></h1>
    </div>
  </div>
</div>

);
};

export default One;
