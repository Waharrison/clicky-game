import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <div className="navbar-brand" >Clicky Game</div>
          <form class="form-inline">
            <button class="btn btn-outline-success" type="button">
              Main button
            </button>
            <button class="btn btn-sm btn-outline-secondary" type="button">
              Smaller button
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default Navbar;
