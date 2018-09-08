import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log('Nav Bar rendered');
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" >
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
