import React from 'react';
import { render } from 'react-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Search from './pages/Search';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const App = () => (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  );
  
  ReactDOM.render(<App />, document.getElementById('root'));