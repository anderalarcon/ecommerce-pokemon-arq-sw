import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";
import Header from "../../Components/Header/Header.jsx";
import NavBar from "../../Components/NavBar/NavBar.jsx";

import { productsJSON } from "../../utilities/products.js";
import "./Category.scss";

const URL_API = "http://localhost:8000/Products";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // setProducts(productsJSON.filter((product) => product.category_id === id_category));
      try {
        const result = await axios.get(`${URL_API}/Category/${category}`)
        setProducts(result.data)
      }
      catch (err) {
        console.log(err)
      }
    };
    fetchData();
  }, [category]);
  return (
    <>
      <Header />
      <NavBar />
      <div className="products container">
        <div className="products_container">
          {products.map(({ id, name, description, price, pictures }) => (
            <Card
              id={id}
              name={name}
              description={description}
              price={price}
              src={pictures[0]?.uri}
              key={id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
