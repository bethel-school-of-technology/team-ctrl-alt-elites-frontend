import React, { Component } from 'react';



const Home = () => 
(
    <div style= {{ margin: '1em' }} >
    <h1>Home</h1>
    <div style= {{display: 'flex', flexDirection: 'row' }} >
        <img className="img" src= " https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80 "/>
        <div>
            <h3>"Not all who wander are lost"</h3>
            <p><small>J.R.R. Tolkein</small></p>
            <br/>
            <h5>Bethel School of Technology Fullstack Bootcamp Final Project</h5>
            <p><small>Caleb Smith | Matthew De La Cruz | Raphael Liegeois-Barbey </small></p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
        </div>
   </div>
   <button type="button" className="btn btn-primary" style={{ width: '100%'}}>Search</button>
 </div>
);




export default Home;