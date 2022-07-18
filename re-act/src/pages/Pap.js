/*import React, { useEffect, useState, useContext} from 'react';
import AllProfiles from '../components/AllProfiles';
import API from '../services/api';

// Header Nav Bar Title - to be used later
//const Profile = () => <Header title="Profile" />




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

export default Pap; */

// API
//const API = 'mongodb+srv://fomo-cluster.trpep.mongodb.net/myFirstDatabase" --apiVersion 1 --username dbuser';
/*const User = props => {
  return (
    <div>
      < Prof profileName= "Breathe + Bathe Soundbath Series: Venice Beach" />
    </div>
  );
};

class Prof extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <h3>{this.props.profileName}</h3>
      </div>
    );
  }
}*/


/*
const Owner = props => (
  <ul>
    <li>Profile: {props.person.profileName}</li>
    <li>Img: {props.person.ProfileImg}</li>
    <ul>
      <li>Description: {props.person.description}</li>
      <li>Event Time: {props.person.eventTime}</li>
      <li>Event Location: {props.person.eventLocation}</li>
      <li>Event Type: {props.person.eventType}</li>
      <li>Details: {props.person.fullDetails}</li>
    </ul>
  </ul>
);

Owner.propTypes = {
  person: PropTypes.shape({
    profileName: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    eventTime: PropTypes.string.isRequired,
    eventLocation: PropTypes.string.isRequired,
    eventType: PropTypes.string.isRequired,
    fullDetails: PropTypes.string.isRequired,
  })
}
*/

