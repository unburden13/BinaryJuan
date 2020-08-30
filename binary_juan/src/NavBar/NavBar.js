import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render(){
        return(
          <div className="NavBar">
              <div className="link-container">
                <Link to="/Music" className="link">Música</Link>
              </div>
              <div className="link-container">
                <Link to="/Image" className="link">Imágen</Link>
              </div>
              <div className="link-container">
                <Link to="/LyricHome" className="link">Letra</Link>
              </div>
              <div className="link-container">
                <Link to="/About" className="link">Acerca</Link>
              </div>
              <div className="link-container">
                <Link to="/Contact" className="link">Contacto</Link>
              </div>
          </div>
        );
    }
}

export default NavBar;