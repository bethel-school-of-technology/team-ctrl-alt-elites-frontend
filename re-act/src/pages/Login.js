import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //assign to id the id that was created for the user linked to an event..;
  let { id } = useParams

  const signIn = (e) => {
    e.preventDefault();
      
    if (username !== '' && password !== '' ) {
      //make the call to axios
      const req = {
        
          username: username,
          password: password
      
      };

      axios.post('http://localhost:8080/api/auth/signin', req).then(result => {
        const token = result.data.token;
        localStorage.setItem('myJWT', token);
        //history.push('/One')
        navigate( '/One/' + id);
        console.log(result.data);

        
      })

    }

  };

  return (
    <div style= {{ margin: '1em' }} >
    <h2>Login</h2>
    <form onSubmit={ signIn }>
      <label>Username</label>
      <input type="text" name="username" onChange={ e => setUsername(e.target.value) } />
      <label>Password</label>
      <input type="text" name="password" onChange={ e => setPassword(e.target.value) } />
      
      <button>Sign In</button>
    </form>
    <SignUp />
  </div>);
  
};

export default Login;