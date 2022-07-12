import React, { useEffect, useState, useContext } from 'react';
import AllProfiles from './components/AllProfiles';
import API from './services/api';
import './pap.css';


function Pap() {
  const [allProfiles, setAllProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({
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
  //to stop the form resetting when filling in fields in the form
  const handleProfileChange = (e) => {
    const { value } = e.target;
    setNewProfile({ ...newProfile, profile: value })
  };

  const handleImgChange = (e) => {
    const { value } = e.target;
    setNewProfile({ ...newProfile, img: value })
  };

  const handleTypeChange = (e) => {
    const { value } = e.target;
    setNewProfile({ ...newProfile, type: value })
  };

  const handleTimeChange = (e) => {
    const { value } = e.target;
    setNewProfile({ ...newProfile, time: value })
  };

  const handleLocationChange = (e) => {
    const { value } = e.target;
    setNewProfile({ ...newProfile, location: value })
  };

  const handleSummaryChange = (e) => {
    const { value } = e.target;
    setNewProfile({ ...newProfile, summary: value })
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setNewProfile({ ...newProfile, description: value })
  };

  const handleSubmit = (e) => {
    //will take an event, but will take a default, forms will refresh themselves as a default
    //if you do e.prevent default it will stop the form refreshing
    e.preventDefault();

    API.createProfile(newProfile).then(res => {
      console.log(res)
    })

  };


  return (
    <div className="Pap">
      <AllProfiles
        profileData={allProfiles}
        handleProfileChange={handleProfileChange}
        handleImgChange={handleImgChange}
        handleTypeChange={handleTypeChange}
        handleTimeChange={handleTimeChange}
        handleLocationChange={handleLocationChange}
        handleSummaryChange={handleSummaryChange}
        handleDescriptionChange={handleDescriptionChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Pap;