import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Link, useParams } from 'react-router-dom';

const One = () => {

  const [owners, setOwners] = useState({});
  let { id } = useParams();
  
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
}, []);

return (
<div style={{ margin: '1em' }}>
  <div>
  <h2>{owners.profile}</h2>
  <br />
  <h6>{owners.summary}</h6>
  <hr />
  <div >
    <div >
      <img className="img" style={{ width: "100%" }} src={owners.img}></img>
  </div>
  <div>
      <h6>Type: {owners.type}</h6>
      <h6>Time: {owners.time}</h6>
      <h6>Location: {owners.location}</h6>
      <p>Price: ${owners.price}</p>
  <br />
      <p>{owners.description}</p>
  </div>
  </div>
  </div>
 
  <br />
  
    <Link role="button" to={ `/${owners._id}/edit` } className="btn btn-primary d-flex justify-content-center " style={{ width: '100%'}}>Edit</Link>
    
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
