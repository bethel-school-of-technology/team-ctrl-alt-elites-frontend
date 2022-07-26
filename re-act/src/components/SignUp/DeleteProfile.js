import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  const signUp = (e) => {
    e.preventDefault();
      
    if (username !== '' && password !== '' ) {
      //make the call to axios
      const req = {
        
          username: username,
          password: password,
          email: email,
          
      
      };

      axios.post('http://localhost:8080/api/auth/signup', req).then(result => {
        const token = result.data.token;
        localStorage.setItem('myJWT', token);
        //history.push('/One')
        navigate( '/One');
        console.log(result.data);

        
      })

    }

  };

  return (
    <div style= {{ margin: '1em' }} >
    <h2>SignUp</h2>
    <form onSubmit={ signUp }>
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

export default SignUp;