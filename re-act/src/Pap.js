import React, { useEffect, useState, useContext} from 'react';
import AllProfiles from './components/AllProfiles';
import API from './services/api';
import './pap.css';


function Pap() {
  const [ allProfiles, setAllProfiles ] = useState([]);
  const [ newProfile, setNewProfile ] = useState({
    profile: "",
    img: "",
    type: "",
    time: "",
    location: "",
    price: "",
    summary: "",
    description: ""
  });

useEffect(() => {
getAllProfiles();
}, []);

const getAllProfiles = () => {
    API.getAll().then(res => {
        setAllProfiles(res.data)
    });
  };

const handleProfileChange = (e) => {

  const { value } = e.target;

  console.log(value);

}


return (
    <div className="Pap">
        <AllProfiles profileData={allProfiles} handleProfileChange={handleProfileChange}/>
    </div>
    );
}

export default Pap;