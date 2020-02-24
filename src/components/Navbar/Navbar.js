import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navigationButtons = ['allchannels', 'specificday', 'currentlylive']

const Navbar = (props) => {
   return (
    <>
      <nav className="navbar">
        | {navigationButtons.map(nb => <div key={nb} className="navbarClickable"><Link to={nb}>{nb}</Link> | </div>)}
      </nav>
    </>
  );
};

export default Navbar
