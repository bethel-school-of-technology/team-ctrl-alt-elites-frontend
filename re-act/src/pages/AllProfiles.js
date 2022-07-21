import React, { useEffect, useState, useContext } from 'react';
import App from '../app';
import FomoAllProfiles from '../components/AllProfiles/FomoAll Profiles';




function All() {

 //all owners
 const [owners, setOwners] = useState([]);

useEffect(() => {
  const getAllOwners = async () => {
    let ownersData = await fetch("http://localhost:8080/owners")
    let ownersProfiles = await ownersData.json();
    //console.log(ownersProfiles);
   setOwners(ownersProfiles.data.owners);
  }
getAllOwners();
}, []);

return (
  
  <div className="Profile">
    <div style={{ margin: '1em' }} >
  
      <h1>FOMO Profiles</h1>
      <h6>Shows all profiles from true back end</h6>
      <hr />
    <FomoAllProfiles owners={owners} />
    <hr />
  </div>
  </div>
  
);

}

export default All;

/////////////////
