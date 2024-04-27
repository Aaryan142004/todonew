import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li>
            <Link to="/Taskss" className="nav-link">Tasks</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
