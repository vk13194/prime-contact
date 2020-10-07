import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-sm navbar-primary bg-light mb-3 py-0">
  <div className="container">
  <a href="/" className="navbar-brand">
    <h4>Contact-kepper</h4>
  </a>
  </div>
  <ul className="navbar-nav mr-auto">
  <li className="nav-item">
    <Link to="/" className="nav-link">
    <i className="fas fa-home" /> Home
      </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">
        <i className="fas fa-question" /> About
          </Link>
      </li>
  </ul>
</nav>
    )}

export default Navbar
