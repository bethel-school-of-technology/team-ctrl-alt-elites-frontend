/*import React, { useEffect, useState } from 'react';
import IProfiles from '../components/AllProfiles/iProfiles';
import API from '../services/api';

function Profile () {
 
//all journals stores the info, set all journals sets the info stored in all journals
 const [ allProfiles, setAllProfiles] = useState([]);
 
 
  useEffect(() => {
    getAllProfiles();
  }, [])

  const getAllProfiles = () => {
    API.getAll().then(res => {
      
//setAllJournals then adds the data into the journals state (allProfiles)
      setAllProfiles(res.data)
    })
  }

//profile.Data comes from the iPro page and is set to the array above
  
return (
  
    <div className="Profile">
      <div style={{ margin: '1em' }} >
    
        <h1>Profile</h1>
        <h6>Shows all profiles from fake back end</h6>
        <hr />
      <IProfiles profileData={allProfiles} />
      <hr />
    </div>
    </div>
    
  );


}

export default Profile;
*/
   
