import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate, } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

//inset props in props at = (here) =>
const EditProfile = () => {
  const navigate = useNavigate();
  const [owners, setOwners] = useState({
    profile: "",
    img: "",
    type: "",
    time: "",
    location: "",
    price: "",
    summary: "",
    description: ""
  });
  let { id } = useParams();

  const updateProfile = (e) => {
    e.preventDefault();

    //need to change to login privilidges when connected to users protected routes
    //if (owners.profile !== '' && owners.id !== '' ) {
    //make the call to axios
    const req = {
      ...owners
    };

//replace below lines when props past in with token (lines const toke and if !token and const option)

    //not token as of yet from owners
    // const token = localStorage.getItem('myJWT');

    //  if (!token) {
    //     navigate('/login');
    //   }

    //   const options = {
    //      headers: {
    //          'Authorization': `Bearer ${token}`
    //        }
    //    }
//replace all above to relpace below with:
    //const options ={
      //headers: {
        //'Authorization': `Bearer ${props.token}`
      //}
   // }


    const url = `http://localhost:8080/owners/update/${id}`
    //added const token and const options as well as commenting out const token = result.data.token; below
    axios.put(url, req, /*options*/).then(result => {
      //const token = result.data.token;
      // localStorage.setItem('myJWT', token);
      //history.push('/One')
      //navigate( '/one');
      console.log(result.data);
      /*props.*/navigate(`/${id}`);
    },
      /*err => {
        localStorage.removeItem('myJWT');
        //props.navigate('/login);
      }*/);
    //}
  };



  useEffect(() => {

    //62d7cb0911df47658e80d4c6
    //set to users instead
    //cant find a get user by id route 
    const url = `http://localhost:8080/owners/${id}`;

    axios.get(url).then(result => {
      console.log(result)
      setOwners(result.data.data.owner);
    }, err => {
      console.log('error', err);
    });
  }, [id]);


//repeat props adons for delete


  const deleteOwner = () => {
    console.log('Bye!');
     //not token as of yet from owners
    // const token = localStorage.getItem('myJWT');


    //  if (!token) {
    //     navigate('/login');
    //   }

    //   const options = {
    //      headers: {
    //          'Authorization': `Bearer ${token}`
    //        }
    //    }

    const url = `http://localhost:8080/owners/delete/${id}`
    //added const token and const options as well as commenting out const token = result.data.token; below
    axios.delete(url, /*options*/).then(result => {
      //const token = result.data.token;
      // localStorage.setItem('myJWT', token);
      //history.push('/One')
      //navigate( '/one');
      console.log(result.data);
      navigate(`/`);
    },
      /*err => {
        localStorage.removeItem('myJWT');
        
      }*/);
    //http://localhost:8080/owners/delete/62d826ea02aaa550d6f5ff9e
  };

  return (
    <div style={{ margin: '1em' }}>
      <h2>Edit Profile</h2>
      <hr />
      <div>
        <form onSubmit={updateProfile} className="form">
          <label className="form-label mt-4">Profile Name</label>
          <br />
          <input name="profile" value={owners.profile} onChange={e =>
            setOwners({ ...owners, profile: e.target.value })} />
          <br />
          <label className="form-label mt-4">Profile Image - input url</label>
          <br />
          <input name="img" /*type="file" multiple accept="image/*"*/ value={owners.img} onChange={e => setOwners({ img: e.target.value })} />
          <br />
          <label className="form-label mt-4">Type</label>
          <br />
          <input name="type" value={owners.type} onChange={e =>
            setOwners({ ...owners, type: e.target.value })} />
          <br />
          <label className="form-label mt-4">Time</label>
          <br />
          <input name="time" value={owners.time} onChange={e =>
            setOwners({ ...owners, time: e.target.value })} />
          <br />
          <label className="form-label mt-4">Location</label>
          <br />
          <input name="location" value={owners.location} onChange={e =>
            setOwners({ ...owners, location: e.target.value })} />
          <br />
          <label className="form-label mt-4">Price</label>
          <br />
          <input type="number" name="price" value={owners.price} onChange={e =>
            setOwners({ ...owners, price: e.target.value })} />
          <br />
          <label className="form-label mt-4">Summary of Event</label>
          <br />
          <textarea
            rows="5"
            cols="50"
            name="summary"
            value={owners.summary}
            onChange={e =>
              setOwners({ ...owners, sumary: e.target.value })} />
          <br />
          <label className="form-label mt-4">Description of Event</label>
          <br />
          <textarea
            rows="10"
            cols="50"
            name="description"
            value={owners.description}
            onChange={e =>
              setOwners({ ...owners, description: e.target.value })} />
          <br />
          <br />
          <button className="btn btn-dark d-flex justify-content-center" style={{ width: '100%' }} type="Submit">Update</button>
        </form>

        <Link role="button" to={`/${owners._id}`} style={{ width: '100%' }} className="btn btn-secondary d-flex justify-content-center " > Back to Profile </Link>
        <button onClick={ deleteOwner } className="btn btn-primary d-flex justify-content-center" style={{ width: '100%' }} type="Submit">Delete</button>
      </div>
      <br />
      <div className="d-flex align-items-end justify-content-center"  >
        <h1 className="mt-auto" ><Link to="/">FOMO</Link></h1>
      </div>
    </div>
  );
};

export default EditProfile;
