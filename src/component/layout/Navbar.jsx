import React from 'react'
import {Link} from "react-router-dom";


function Navbar() {
    return (
        <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <Link className="navbar-brand" href="#">CRUD</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <Link activeClassName="active " className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link  activeClassName="active" className="nav-link" exact to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" exact to="/service">Service</Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link " exact to="/contact" >contact</Link>
        </li>
      </ul>
      
    </div>
    <Link type="button" className="btn btn-light" to="/user/adduser">Add user</Link>
  </div>
</nav>




            
        </>
    )
}

export default Navbar;
