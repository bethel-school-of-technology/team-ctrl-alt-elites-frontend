import React from 'react';
import CreateProfile from '../createProfile';

const FomoAllProfiles = ({ users }) => {


    return (
        <div key={users.users}>
            {users.map(users => (
                    
                  <div key={users.id}>
                    <h3 key={users.username}>{users.username}</h3>
                    <h3 key={users.email}>{users.email}</h3>
                    <h3 key={users.profile}>{users.profile}</h3>
                    <img style={{maxWidth: "40%"}} key={users.img}className="img" src={users.img}></img>
                    <h6 key={users.type}>{users.type}</h6>
                    <h6 key={users.time}>{users.time}</h6>
                    <p key={users.location}>{users.location}</p>
                    <p key={users.price}>{users.price}</p>
                    <p key={users.summary} >{users.summary}</p>
                    <p key={users.description}>{users.description}</p>
                </div>
                
            ))}
        </div>
    )
}

export default FomoAllProfiles;