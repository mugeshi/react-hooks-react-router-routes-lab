import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div className="navbar">
      <NavLink
        to="/"
        activeStyle={{
          display: "block",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="movies"
        activeStyle={{
          display: "block",
        }}
      >
        Movies
      </NavLink>
      <NavLink
        to="directors"
        activeStyle={{
          display: "block",
        }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        activeStyle={{
          display: "block",
        }}
      >
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;