import React from "react";
import { Link } from "react-router-dom";
import { categoriesJSON } from "../../utilities/categories";
import "./NavBar.scss"
const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav_container">
        {categoriesJSON.map(({ id, category,slug }) => {
          return <Link className="nav_container_link" key={id} to={`/category/${id}/${slug}`}>{category}</Link>;
        })}
      </div>
    </nav>
  );
};

export default NavBar;
