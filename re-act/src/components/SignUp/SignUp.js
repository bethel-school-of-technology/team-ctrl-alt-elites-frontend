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
          //token: token
        };
        const token = localStorage.getItem('myJWT');

        if (!token) {
            navigate('/login');
        }

        const options = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
      
      
//added const token and const options as well as commenting out const token = result.data.token; below
      axios.post('http://localhost:8080/api/auth/signup', req, options).then(result => {
        //const token = result.data.token;
        localStorage.setItem('myJWT', token);
        //history.push('/One')
        navigate( '/one');
        console.log(result.data); 
      }, err => {
        localStorage.removeItem('myJWT');
        navigate('/login');
      });
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