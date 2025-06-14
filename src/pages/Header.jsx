import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  navBrand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    letterSpacing: '2px',
    color: '#fff',
  },
  navLink: {
    color: '#fff',
    margin: '0 1rem',
    fontWeight: '500',
    textDecoration: 'none',
    fontSize: '1.1rem',
  },
  activeNav: {
    borderBottom: '2px solid #fff',
  },
};

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-success bg-success">
    <NavLink className="navbar-brand ms-4" to="/" style={styles.navBrand}>
      QuesAns
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink
            exact
            to="/"
            className="nav-link"
            style={styles.navLink}
            activeStyle={styles.activeNav}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item me-2">
          <NavLink
            to="/about"
            className="nav-link"
            style={styles.navLink}
            activeStyle={styles.activeNav}
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
