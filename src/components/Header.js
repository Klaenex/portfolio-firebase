import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="menu">
      <h1 className="title title_menu">
        <Link className="link link_title" to="/">
          Cuozzo
          <br />
          Vincenzo
        </Link>
      </h1>
      <div>
        <Link to="/about" className="link link_menu">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Header;
