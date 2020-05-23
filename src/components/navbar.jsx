import React, { Component } from 'react';

const Navbar = ({totalCounter}) => {
    return ( 
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
           <a className="navbar-brand" >Navbar
           <span className="badge badge-pill badge-secondary m-1">
           {totalCounter}
           </span>
          </a>
           
        </nav>
   );
}
 
export default Navbar;