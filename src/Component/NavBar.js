import React, { Component } from "react";

class NavBar extends Component {
  render() {
    console.log("hi", this.props.totalCounters.length);
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters.length}
          </span>
        </nav>
      </div>
    );
  }
}

export default NavBar;
