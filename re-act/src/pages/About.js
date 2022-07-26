import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const About = () => 
(
    

    
    <div style= {{ margin: '1em' }} >
    <h1>Results of Search</h1>
    
    <div style= {{display: 'flex', flexDirection: 'row' }} >
        <img className="img" src= " https://images.unsplash.com/photo-1595037935521-15ce2282a03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" />
        <div>
            <h3>Bethel School of Technology Fullstack Bootcamp Final Project</h3>
            <p><small>Caleb Smith | Matthew De La Cruz | Raphael Liegeois-Barbey </small></p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
        </div>
   </div>
        <Link to="/">
            <button type="button" className="btn btn-primary">Fomo</button>
        </Link>
 </div>

)

export default About;