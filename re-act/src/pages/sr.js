
import React, { useEffect, useState, useContext } from 'react';
import App from '../app';
import FomoAllProfiles from '../components/AllProfiles/FomoAll Profiles';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sr = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/users').then(result => {
        
        
        setUsers(result.data.data.users);
        console.log(result.data.data.users);

        console.log(users.username);

        
        });
    }, []);
    
   

   
    return (<div className="container" style={{ margin: '1em' }}>
    <h1 style={{ margin: '1em' }}>Search Results</h1>
    <ul  className="row w-100" >
         { users.map(users =>
            <li style={{ padding: '0.5em'}} className=" d-flex justify-content-center col-12 col-md-6 col-lg-4 col-xl-2 " key={users._id}>
                
                <a href={ `/${users._id}` }>
                <img key={users.image} className="img-thumbnail rounded mx-auto d-block " src={users.image}></img>
                </a>
            </li>
            )}
    </ul>
 </div>);


}

export default Sr;