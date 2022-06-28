import React from 'react';

const Header = ({ title }) => (
  <div>
    <a id="logohead" href="/">FOMO</a>
    <a href="/about">About</a>
    <a href="/login">Login</a>
    <a href="/search"><button type="button" class="btn btn-primary">Search</button></a>
    <h1>{title}</h1>
  </div>
);

export default Header;

