import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar" id="navBar">
        <div className="container">
          <div className="navbar-brand" id="navHead" >Clicky Icon Game</div>
          <div className="navbar-brand" id="navHead" > </div>
          <div className="navbar-brand" id="navHead" > </div>
          <div className="navbar-brand" id="navHead" style={{fontSize:"24px", textAlign:"center"}}>High Score: {this.props.highScore}</div>
          <div className="navbar-brand" id="navHead" style={{fontSize:"24px", textAlign:"center"}} >Current Score: {this.props.score}</div>

          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
