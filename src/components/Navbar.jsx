import React from "react";
import logoImg from '../../src/assets/images/logo.jpg';
import './styles.css';

class Navbar extends React.Component {
    render() {
        return (
        <header>
            <nav id="navbar">
              <div className="nav-brand">
                <img src={logoImg} alt="" width='100px'/>
                <h1>Space Flight News</h1>
              </div>
    
            <ul className="nav-list">
              <li><a href="/">Home</a></li>
              <li><a href="/">Trending</a></li>
              <li><a href="/">Categories</a></li>
              <li><a href="/">About us</a></li>
              </ul>
            </nav>
          </header>
          );
    }
}

export default Navbar;