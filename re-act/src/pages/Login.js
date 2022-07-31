import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';
import One from './OneProfile';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //assign to id the id that was created for the user linked to an event..;
  let { id } = useParams

  const signIn = (e) => {
    e.preventDefault();
    console.log("sign in!")
    if (username !== '' && password !== '') {
      //make the call to axios
      const req = {

        username,
        password
        
      };
      
      axios.post('http://localhost:8080/api/auth/signin', req).then(result => {
        const token = result.data.token;
        localStorage.setItem('myJWT', token);
        //history.push('/One')
        navigate('/' + id);
        console.log(result.data);


      })

    } 

  };

  return (
    <div className="login" style={{ margin: '1em', marginTop: '2em' }} >
      <div>
        <h2>Login</h2>
        <form onSubmit={signIn} autoComplete="off">
          

            <input autoComplete="off" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />

            <input autoComplete="off" type="text" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button >Login</button>
          
        </form>
      </div>

      <div >
        <img className="humbo" src="https://images.unsplash.com/photo-1460176449511-ff5fc8e64c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"></img>
      </div>

      <div className="position-relative mb-auto">
        <Link role="button" to="/new" className="btn btn-primary mt-200 position-absolute bottom-0"
          style={{ width: '100%', marginTop: "50px" }}>Create Profile</Link>
      </div>

      <div className="d-flex  fixed-bottom justify-content-center row"  >
        <div>
          <h1 className="mt-auto " ><Link to="/">FOMO</Link></h1>
        </div>
      </div>
    </div>
  );


};

export default Login;