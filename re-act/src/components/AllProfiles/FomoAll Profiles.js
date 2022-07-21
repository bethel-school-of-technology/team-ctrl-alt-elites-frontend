import React from 'react';
import CreateProfile from '../createProfile';

const FomoAllProfiles = ({ owners }) => {

console.log(owners);
    return (
        <div>
            {owners.map(owners => (
                
                  <div key={owners.id}>
                    <h3>{owners.profile}</h3>
                    <img className="img" src={owners.img}></img>
                    <h6>{owners.type}</h6>
                    <h6>{owners.time}</h6>
                    <p>{owners.location}</p>
                    <p>{owners.price}</p>
                    <p>{owners.summary}</p>
                    <p>{owners.description}</p>
                </div>
                
            ))}
        </div>
    )
}

export default FomoAllProfiles;