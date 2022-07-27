import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
//import Profile from './pages/Profile';
import Search from './pages/Search';
//import Create from './pages/CreateProfile';
import All from './pages/AllProfiles';
import One from './pages/OneProfile';
import New from './pages/NewProfile';
import Sr from './pages/sr'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EditProfile from './components/EditProfile';

const App = () => (
  <Router>
    <div >
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>

        <h1 style={{ marginRight: 'auto', marginTop: '0.2em', marginLeft: '0.3em' }} ><Link to="/">FOMO</Link></h1>


        <ul className="navlist" style={{ display: 'flex', flexDirection: 'row', marginLeft: '2em', }} >
          <li style={{ marginTop: '1em', marginRight: '2em' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ marginTop: '1em', marginRight: '2em' }}>
            <Link to='/about'>About</Link>
          </li>
          <li style={{ marginTop: '1em', marginRight: '2em' }}>
            <Link to='/login'>Login</Link>
          </li>
          {/*<li style={{ marginTop: '1em', marginRight: '2em' }}>
            <Link to='/profile'>Profile</Link>
          </li>
          <li style={{ marginTop: '1em', marginRight: '2em' }}>
            <Link to='/create'>Create Profile</Link>
          </li>*/}
          {/*<li style={{ marginTop: '1em', marginRight: '2em' }}>
            <Link to='/all'>All Profiles</Link>
        </li>*/}
          {/*<li style={{ marginTop: '1em', marginRight: '2em' }}>
            <Link to='/one'>One Profile</Link>
        </li>*/}
          {/*<li style={{ marginTop: '1em', marginRight: '2em' }}>
            <Link to='/new'>New Profile</Link>
      </li>*/}
          <li style={{ marginTop: '1em', marginRight: '2em' }}>
            <Link to='/sr'>Results</Link>
          </li>
          <li style={{ marginRight: '2em' }}>
            <Link to='/search'><button type="button" className="btn btn-primary">Search</button></Link>
          </li>
        </ul>

      </div>

      <hr />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/*<Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />*/}
        <Route path="/all" element={<All />} />
        <Route path="/one" element={<One />} />
        <Route path="/new" element={<New />} />
        <Route path="/sr" element={<Sr />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<One />} /> 
        {/* < One />  </Route> */}
        <Route path="/:id/edit" element={<EditProfile />} />
          
        
      </Routes>
    </div>

  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));