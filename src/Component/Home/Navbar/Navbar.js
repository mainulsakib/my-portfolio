import React from 'react';
import { Link } from 'react-router-dom';
import cv from '../../../mainul resume 8.pdf'
import './Navbar.css'

const Navbar = () => {
    return (
      
   <nav class="navbar navbar-expand-lg navbar-light sticky-top " >
  <a class="navbar-brand font-weight-bold mainColor" style={{color:'purple'}} >Mainul Islam</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto ">
      <li class="nav-item active">
        <Link style={{color:'white'}} class="nav-link" to="Home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link style={{color:'white'}} class="nav-link" to="/About">About</Link>
      </li>
      <li class="nav-item">
        <Link style={{color:'white'}} class="nav-link"to="/projects">Project</Link>
      </li>
      <li class="nav-item">
        <Link style={{color:'white'}} class="nav-link" to="/Contact">Contact</Link>
      </li>
      <li class="nav-item">
        <Link  style={{color:'white'}} class="nav-link" to="/Blog">Blog</Link>
      </li>
      <li class="nav-item">
      <button className="btn-primary"><a  style={{color:'white'}}href={cv}>Resume</a></button>
      </li>
    
    </ul>
  
  </div>
</nav>
        
    );
};

export default Navbar;