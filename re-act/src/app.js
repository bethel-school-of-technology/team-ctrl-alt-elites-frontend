import React, { useEffect, useState, useContext } from 'react';
import './pap.css';


function App() {

    //will be id
    var [isEdit, setIsEdit] = useState("");
    //all owners
    var [owners, setOwners] = useState([]);
    //for editing owners
    var [owner, setOwner] = useState([]);
  
    var [profile, setProfile] = useState("");
    var [img, setImg] = useState("");
    var [type, setType] = useState("");
    var [time, setTime] = useState("");
    var [location, setLocation] = useState([]);
    var [price, setPrice] = useState("");
    var [summary, setSummary] = useState("");
    var [description, setDescription] = useState("");
  
    //get all owners from mongo db
    useEffect(() => {
      const getAllOwners = async () => {
        let ownersData = await fetch("http://localhost:8080/owners")
        let ownersProfiles = await ownersData.json();
        console.log(ownersProfiles);
       setOwners(ownersProfiles.data.owners);
      }
   getAllOwners();
  }, []);

return (
    <div className='App'>
        {owners.map((owners, idx) => {
            return(
                <div key={idx}>
                    
                    <h3>{owners.profile}</h3>
                    <img className="img" src={owners.img}></img>
                    <h6>{owners.type}</h6>
                    <h6>{owners.time}</h6>
                    <p>{owners.location}</p>
                    <p>{owners.price}</p>
                    <p>{owners.summary}</p>
                    {owners.description}
                </div>
            )
        })}
    </div>
)
}

export default App;