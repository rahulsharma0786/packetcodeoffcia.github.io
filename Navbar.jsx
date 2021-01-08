import React from "react";
import { NavLink } from "react-router-dom";


const Navbar=()=>{
    return(
<>
<nav className="nav navbar navbar-expand-sm navbar-dark bg-dark mt-1">
<div className="container-fluid">
  <NavLink className="navbar-brand" to="/">Hotelvilla</NavLink>
<button
className="navbar-toggler"
type="button"
data-toggle="collapse"
data-target="#navbarSupportedContent"
aria-controls="navbarSupportContent"
aria-expanded="false"
aria-label="Toggle navigation"
>
<span className="navbar-toggler-icon"></span>  
  </button>
  </div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto text-center text-upparcase">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="Gallery">Gallery</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="Contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="Admin">Admin</NavLink>
      </li>
      
    </ul>
  </div>
</nav>

</>

    )

}
export default Navbar;