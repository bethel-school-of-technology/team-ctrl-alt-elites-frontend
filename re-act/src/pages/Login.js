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

    if (username !== '' && password !== '') {
      //make the call to axios
      const req = {

        username: username,
        password: password

      };

      axios.post('http://localhost:8080/api/auth/signin', req).then(result => {
        const token = result.data.token;
        localStorage.setItem('myJWT', token);
        //history.push('/One')
        navigate('/One/' + id);
        console.log(result.data);


      })

    }

  };

  return (
    <div className="login" style={{ margin: '1em', marginTop: '2em' }} >
      <div>
        <h2>Login</h2>
        <form onSubmit={signIn}>
          <div className="form-group">

            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" onChange={e => setUsername(e.target.value)} />

            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button type="button" class="btn btn-dark">Login</button>
          </div>
        </form>
      </div>

      <div >
        <img className="humbo" src="https://images.unsplash.com/photo-1460176449511-ff5fc8e64c35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"></img>
      </div>

      <SignUp />

      <div className="position-relative mb-auto">
        <Link role="button" to="/new" className="btn btn-primary mt-200 position-absolute bottom-0"
          style={{ width: '100%', marginTop: "100px" }}>Create Profile</Link>
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