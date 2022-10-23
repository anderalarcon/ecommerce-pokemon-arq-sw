import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
const Header = () => {
  return (
    <header className="header container">
      <div className="header_container">
        <div>
          <Link to={"/"}>Inicio</Link>
        </div>
        <div>
          <button>Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
