
import React, { useEffect, useState, useContext } from 'react';
import App from '../app';
import FomoAllProfiles from '../components/AllProfiles/FomoAll Profiles';
import axios from 'axios';

const Sr = () => {

    const [owners, setOwners] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/owners').then(result => {
        
        
        setOwners(result.data.data.owners);
        console.log(result.data.data.owners);

        console.log(owners);

        
        });
    }, []);


   
    return (<div>
    <h1>Search Results</h1>
    <ul>
         { owners.map(owner =>
            <li key={owner._id}>
                {owner.profile}

            </li>  ) }
    </ul>
 </div>);


}

export default Sr;