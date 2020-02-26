import React from 'react';
import { Link } from 'react-router-dom';
import './Navbutton.css';

const NavButton = (props) => {
return (
<div key={props.nb} className="navButton"><Link to={props.nb}>{props.nb} </Link></div>
)};

export default NavButton;
