import React from 'react';
import CreateProfile from '../createProfile';

const FomoAllProfiles = ({ owners }) => {


    return (
        <div key={owners.owners}>
            {owners.map(owners => (
                
                  <div key={owners.id}>
                    <h3 key={owners.profile}>{owners.profile}</h3>
                    <img key={owners.img}className="img" src={owners.img}></img>
                    <h6 key={owners.type}>{owners.type}</h6>
                    <h6 key={owners.time}>{owners.time}</h6>
                    <p key={owners.location}>{owners.location}</p>
                    <p key={owners.price}>{owners.price}</p>
                    <p key={owners.summary} >{owners.summary}</p>
                    <p key={owners.description}>{owners.description}</p>
                </div>
                
            ))}
        </div>
    )
}

export default FomoAllProfiles;