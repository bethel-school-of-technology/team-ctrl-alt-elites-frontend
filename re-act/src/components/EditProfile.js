import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate, } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

//inset props in props at = (here) =>
const EditProfile = (props) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    username: "",
    password: "",
    email: "",
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
    if (users.username !== '' && users.id !== '' ) {
    //make the call to axios
    const req = {
      ...users
    };

//replace below lines when props past in with token (lines const toke and if !token and const option)

    //not token as of yet from users
     const token = localStorage.getItem('myJWT');
    console.log(token);
    
    //localStorage.setItem('myJWT', token);

   //    const options = {
   //     headers: {
    //          'Authorization': `Bearer ${token}`
    //        }
    //   }

//replace all above to relpace below with:
    const options ={
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    console.log(options);

    const url = `http://localhost:8080/users/update/${id}`
    //added const token and const options as well as commenting out const token = result.data.token; below
    axios.put(url, req, options).then(result => {
     
      
      console.log(result.data);
      console.log(options);
      navigate(`/${id}`);
    },
      err => {
        localStorage.removeItem('myJWT');
        navigate('/login');
      }
      );
    }
  };



  useEffect(() => {

    //62d7cb0911df47658e80d4c6
    //set to users instead
    //cant find a get user by id route 
    const url = `http://localhost:8080/users/${id}`;

    axios.get(url).then(result => {
      console.log(result)
      setUsers(result.data.data.user);
    }, err => {
      console.log('error', err);
    });
  }, [id]);


//repeat props adons for delete


  const deleteUsers = () => {
    console.log('Bye!');
     //not token as of yet from Users
     const token = localStorage.getItem('myJWT');


      if (!token) {
        navigate('/login');
       }

       const options = {
          headers: {
              'Authorization': `Bearer ${token}`
            }
        }

    const url = `http://localhost:8080/users/delete/${id}`
    //added const token and const options as well as commenting out const token = result.data.token; below
    axios.delete(url, options).then(result => {
     
      
      console.log(result.data);
      navigate(`/`);
    },
      err => {
        localStorage.removeItem('myJWT');
        
      });
    //http://localhost:8080/users/delete/62d826ea02aaa550d6f5ff9e
  };

  return (
    <div style={{ margin: '1em' }}>
      <h2>Edit Profile</h2>
      <hr />
      <div>
        <form onSubmit={updateProfile} className="form">
        <label className="form-label mt-4">Profile Name</label>
          <br />
          <input name="username" value={users.username} onChange={e =>
            setUsers({ ...users, username: e.target.value })} />
          <br />
          <label className="form-label mt-4">Username</label>
          <br />
          <input name="password" value={users.password} onChange={e =>
            setUsers({ ...users, password: e.target.value })} />
          <br />
          <label className="form-label mt-4">Email</label>
          <br />
          <input name="email" value={users.email} onChange={e =>
            setUsers({ ...users, email: e.target.value })} />
          <br />
          <label className="form-label mt-4">Profile Name</label>
          <br />
          <input name="profile" value={users.profile} onChange={e =>
            setUsers({ ...users, profile: e.target.value })} />
          <br />
          <label className="form-label mt-4">Profile Image - input url</label>
          <br />
          <input name="image" /*type="file" multiple accept="image/*"*/ value={users.image} onChange={e => setUsers({ image: e.target.value })} />
          <br />
          <label className="form-label mt-4">Type</label>
          <br />
          <input name="type" value={users.type} onChange={e =>
            setUsers({ ...users, type: e.target.value })} />
          <br />
          <label className="form-label mt-4">Time</label>
          <br />
          <input name="time" value={users.time} onChange={e =>
            setUsers({ ...users, time: e.target.value })} />
          <br />
          <label className="form-label mt-4">Location</label>
          <br />
          <input name="location" value={users.location} onChange={e =>
            setUsers({ ...users, location: e.target.value })} />
          <br />
          <label className="form-label mt-4">Price</label>
          <br />
          <input type="number" name="price" value={users.price} onChange={e =>
            setUsers({ ...users, price: e.target.value })} />
          <br />
          <label className="form-label mt-4">Summary of Event</label>
          <br />
          <textarea
            rows="5"
            cols="50"
            name="summary"
            value={users.summary}
            onChange={e =>
              setUsers({ ...users, sumary: e.target.value })} />
          <br />
          <label className="form-label mt-4">Description of Event</label>
          <br />
          <textarea
            rows="10"
            cols="50"
            name="description"
            value={users.description}
            onChange={e =>
              setUsers({ ...users, description: e.target.value })} />
          <br />
          <br />
          <button className="btn btn-dark d-flex justify-content-center" style={{ width: '100%' }} type="Submit">Update</button>
        </form>

        <Link role="button" to={`/${users._id}`} style={{ width: '100%' }} className="btn btn-secondary d-flex justify-content-center " > Back to Profile </Link>
        <button onClick={ deleteUsers } className="btn btn-primary d-flex justify-content-center" style={{ width: '100%' }} type="Submit">Delete</button>
      </div>
      <br />
      <div className="d-flex align-items-end justify-content-center"  >
        <h1 className="mt-auto" ><Link to="/">FOMO</Link></h1>
      </div>
    </div>
  );
};

export default EditProfile;
