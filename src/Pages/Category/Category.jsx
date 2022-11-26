import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";
import Header from "../../Components/Header/Header.jsx";
import NavBar from "../../Components/NavBar/NavBar.jsx";

import { productsJSON } from "../../utilities/products.js";
import "./Category.scss";

// const URL_API = "https://pokecatalogdb.azurewebsites.net/products";
const URL_API = 'http://localhost:8000/products';

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  console.log(category);
  useEffect(() => {
    const fetchData = async () => {
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
          {products.map(({ id, name, description, price, pictures,category }) => (
            <Card
              id={id}
              name={name}
              description={description}
              price={price}
              src={pictures[0]?.uri}
              key={id}
              category={category}
              destino={'categorias'}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
