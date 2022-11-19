import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Card.scss";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const Card = ({ id, name, description, price, src }) => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const handleAddToCart = () => {
    console.log('Add to CART');
  };
  const handleAzureAD = () => {
    instance.loginRedirect({
      scopes: ["user.read"],
    });
  };
  return (
    <div className="card">
      <Link to={`${id}/${name}`} className="card_link">
        <div className="card_container">
          <div className="card_container_image">
            <img className="card_container_image_img" src={src} alt={name} />
          </div>
          <h1 className="card_container_name">{name}</h1>
          <p className="card_container_description">{description}</p>
          <span className="card_container_price">Precio: {price}</span>
        </div>
      </Link>
      <div className="card_button">
        <button
          onClick={isAuthenticated ? handleAddToCart : handleAzureAD}
          className="card_button_btn"
        >
          Agregar al Carro
        </button>
      </div>
    </div>
  );
};

export default Card;
