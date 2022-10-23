import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";
import Header from "../../Components/Header/Header.jsx";
import NavBar from "../../Components/NavBar/NavBar.jsx";

import { productsJSON } from "../../utilities/products.js";
import "./Category.scss";
const Category = () => {
  const { id_category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setProducts(productsJSON.filter((product) => product.category_id === id_category));
    };
    fetchData();
  }, [id_category]);
  return (
    <>
      <Header />
      <NavBar />
      <div className="products container">
        <div className="products_container">
          {products.map(({ id, name, description, price, src }) => (
            <Card
              id={id}
              name={name}
              description={description}
              price={price}
              src={src}
              key={id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
