import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/static/header/logo.svg";
import sigin from "../../assets/static/header/signin.png";
import shopcar from "../../assets/static/header/shopcar.png";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const Header = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const handleSignOut = () => {
    instance.logoutRedirect();
  };
  return (
    <header className="header container">
      <div className="header_container">
        <div className="header_container_left">
          <Link className="header_container_left_link" to={"/"}>
            <img
              className="header_container_left_link_img"
              alt="Logo Pokeshop"
              src={logo}
            />
          </Link>
        </div>
        <div className="header_container_right">
          {isAuthenticated ? (
            <h1>Bienvenido</h1>
          ) : (
            <Link to={"/login"} className="header_container_right_btn">
              <img
                className="header_container_right_btn_icon"
                src={sigin}
                alt=""
              />
              Ingresar
            </Link>
          )}

          {isAuthenticated ? (
            <button onClick={handleSignOut}>Salir</button>
          ) : null}

          <Link to={"/car-shop"} className="header_container_right_btn">
            <img
              className="header_container_right_btn_icon"
              src={shopcar}
              alt=""
            />
            Carrito
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
