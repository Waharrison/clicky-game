import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar" id="navBar">
        <div className="container">
          <div className="navbar-brand" id="navHead" >Clicky Icon Game</div>
         <ul> <li><h2>High Score</h2></li></ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
