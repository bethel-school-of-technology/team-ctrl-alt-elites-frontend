import React, { useEffect, useState, useContext} from 'react';
import AllProfiles from './components/AllProfiles';
import API from './services/api';
import './pap.css';


function Pap() {


  const [allProfiles, setAllProfiles ] = useState([]);

useEffect(() => {

getAllProfiles();
}, [])

const getAllProfiles = () => {
    API.getAll().then(res => {
     

        setAllProfiles(res.data)

    })
  }
return (
    <div className="Pap">
        <AllProfiles profileData={allProfiles}/>
    </div>
    );
}

export default Pap;