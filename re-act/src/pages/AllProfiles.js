import React, { useEffect, useState, useContext } from 'react';
import App from '../app';
import FomoAllProfiles from '../components/AllProfiles/FomoAll Profiles';




function All() {

 //all Users
 const [users, setUsers] = useState([]);

useEffect(() => {
  const getAllUsers = async () => {
    let usersData = await fetch("http://localhost:8080/users")
    let usersProfiles = await usersData.json();
    console.log(usersProfiles);
   setUsers(usersProfiles.data.users);
  }
getAllUsers();
}, []);

return (
  
  <div className="Profile">
    <div style={{ margin: '1em' }} >
  
      <h1>FOMO Profiles</h1>
      <h6>Shows all profiles from true back end</h6>
      <hr />
    <FomoAllProfiles users={users} />
    <hr />
  </div>
  </div>
  
);

}

export default All;

/////////////////
