import React from 'react';
import { connect } from 'react-redux';
import switchViewAction from '../../actions/viewActions'
import './Navbar.css';

const navigationButtons = ['Currently live', 'All channels', 'Specific day']

const Navbar = (props) => {
   return (
    <>
      <nav className="navbar">
        | {navigationButtons.map(nb => <div key={nb} className="navbarClickable" onClick={() => props.switchViewAction(nb)}>{nb} | </div>)}       
      </nav>
    </>
  );
};

export default connect(
  null,
  { switchViewAction },
)(Navbar);
