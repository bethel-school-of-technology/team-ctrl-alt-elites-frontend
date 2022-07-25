import axios from 'axios';
import React, { useState, withRouter } from 'react';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const signIn = (e) => {
    e.preventDefault();
      
    if (username !== '' && password !== '' ) {
      //make the call to axios
      const req = {
        
          username: username,
          email: email,
          password: password
      
      };

      axios.post('http://localhost:8080/api/auth/signin', req).then(result => {
        const token = result.data.token;
        localStorage.setItem('myJWT', token);
       // history.push('/One')
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
      <label>Email</label>
      <input type="text" name="email" onChange={ e => setEmail(e.target.value) } />
      <button>Sign In</button>
    </form>
  </div>);
};

export default Login;