import React from "react";
import { Link } from 'react-router-dom';

import hmLogo from "./images/HMLogo.png"

export default function navbar() {
  return (
    <nav className="nav">
      <ul className="navbar">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/digitization">Digitization</CustomLink>
          <CustomLink to="/publishing">Publishing</CustomLink>
      </ul>

      <img src={hmLogo} alt="HelmsdaleMedia Logo" />

      <button className="contactBtn"><a href="mailto:info@helmsdalemedia.com">Contact Us</a></button>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
    return (
        <li>
        <Link to = {to} {...props}>
        { children }
        </Link>
        </li>
    )
}