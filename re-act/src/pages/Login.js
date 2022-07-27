import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
    <div className="" style= {{ margin: '1em', marginTop: '2em' }} >
    <h2>Login</h2>
    <form onSubmit={ signIn }>
      <label>Username</label>
      <input type="text" name="username" onChange={ e => setUsername(e.target.value) } />
      <label>Password</label>
      <input type="text" name="password" onChange={ e => setPassword(e.target.value) } />
      
      <button>Sign In</button>
    </form>
    <br/>
    <div className="container-fluid">
      <div className="jumbotron">
        <div className="media p-3" >
    <img  src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVuJTIwZXZlbnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"></img>
    </div>
    </div>
    </div>
    <br/>
    <SignUp />
    
    <div className="position-relative mt-auto">
  <Link role="button" to="/new" className="btn btn-primary mt-200 position-absolute bottom-0" 
    style={{ width: '100%' }}>Create Profile</Link>
  </div>
  <br/>
  <div  className="d-flex  fixed-bottom justify-content-center row"  >
  <div>
  <h1 className="mt-auto " ><Link to="/">FOMO</Link></h1>
  </div>
</div>
</div>
  );
  
  
};

export default Login;