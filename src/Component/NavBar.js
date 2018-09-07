import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <span className="badge badge-pill badge-secondary">
          {totalCounters.length}
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
