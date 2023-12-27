import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    < >
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  mb-5`}>
  <div className={`container-fluid`}>
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-Link active me-3" style={{textDecoration: 'none'}} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link active me-3" style={{textDecoration: 'none'}} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link active me-3" style={{textDecoration: 'none'}} to="/contact">Contact</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch me-3 text-${props.mode === 'light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleBlue} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue Mode</label>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>
    </div>
  </div>
</nav>

    </>
  );
}

Navbar.propTypes = {
    title: PropTypes.string,
};

Navbar.defaultProps = {
    title: 'Set the title'
};