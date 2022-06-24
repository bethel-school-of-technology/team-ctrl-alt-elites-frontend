import React from 'react';

const Header = ({ title }) => (
  <div>
    <a id="logohead" href="/">FOMO</a>
    <a href="/about">About</a>
    <a href="/topics">Login</a>
    <a href="/topics"><button type="button" class="btn btn-primary">Search</button></a>
    <h1>{title}</h1>
  </div>
);

export default Header;

