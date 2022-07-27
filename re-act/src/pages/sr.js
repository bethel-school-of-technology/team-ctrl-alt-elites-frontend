
import React, { useEffect, useState, useContext } from 'react';
import App from '../app';
import FomoAllProfiles from '../components/AllProfiles/FomoAll Profiles';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sr = () => {

    const [owners, setOwners] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/owners').then(result => {
        
        
        setOwners(result.data.data.owners);
        console.log(result.data.data.owners);

        console.log(owners);

        
        });
    }, []);
    
   

   
    return (<div className="container" style={{ margin: '1em' }}>
    <h1 style={{ margin: '1em' }}>Search Results</h1>
    <ul  className="row w-100" >
         { owners.map(owner =>
            <li style={{ padding: '0.5em'}} className=" d-flex justify-content-center col-12 col-md-6 col-lg-4 col-xl-2 " key={owner._id}>
                <div>
                <img key={owner.img} className="img-thumbnail" src={owner.img}>
                 
                </img>
                <Link to={ `/${owner._id}` }>{owner.profile}</Link>
                </div>
            </li>
            
            ) }
    </ul>
 </div>);


}

export default Sr;