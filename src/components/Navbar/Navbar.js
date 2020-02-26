import React from 'react';
import Navbutton from './Navbutton';
import './Navbar.css';

const navigationButtons = ['All channels', 'Find', 'Currently live'];

const Navbar = () => (
  <>
    <nav className="navbar">
      {navigationButtons.map((nb) => <Navbutton key={nb} nb={nb} />)}
    </nav>
  </>
);

export default Navbar;
