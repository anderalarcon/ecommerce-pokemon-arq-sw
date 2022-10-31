import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import { productsJSON } from "../../utilities/products";
const Details = () => {
  const { id_product } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchData = () => {
      setProduct(productsJSON.find((product) => product.id === id_product));
    };
    fetchData();
  }, [id_product]);

  return (
    <>
      <Header />
      <NavBar />
      <Card
        id={product?.id}
        name={product?.name}
        description={product?.description}
        src={product?.src}
      />
      
    </>
  );
};

export default Details;
