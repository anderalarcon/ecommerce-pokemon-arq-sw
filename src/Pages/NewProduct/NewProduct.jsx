import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import axios from "axios";

const categorias = [
    {
        id: "cards",
        name: "Cartas",
    },
    {
        id: "clothes",
        name: "Ropa",
    },
    {
        id: "plush",
        name: "Peluches",
    },
    {
        id: "figures",
        name: "Figuras",
    },
    {
        id: "videogames",
        name: "Videojuegos",
    },
]

const defaultProduct = {
    name: "",
    description: "",
    price: "",
    category: "",
    pictures: [],
}

const URL_API = "http://localhost:8000/Products"

const NewProduct = () => {

    const [newProduct, setNewProduct] = useState(defaultProduct);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", newProduct.name);
        formData.append("description", newProduct.description);
        formData.append("price", newProduct.price);
        formData.append("category", newProduct.category);
        newProduct.pictures.forEach((picture) => {
            formData.append("Pictures", picture);
        });

        try {
            const result = axios.post(URL_API, formData);
            console.log(result)
            setNewProduct(defaultProduct)
        }catch (err) {
            console.log(err)
        }
    }

    const handleNewProductChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
    }

    const handleImageChange = (e) => {
        setNewProduct({
            ...newProduct,
            pictures: [...e.target.files],
        });
    }

    return (
        <>
            <Header />
            <NavBar />
            <div className="container">
                <h1>Nuevo Producto</h1>
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            maxLength={100}
                            required
                            value={newProduct.name}
                            onChange={handleNewProductChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <textarea
                            className="form-control"
                            name="description"
                            id="description"
                            rows={3}
                            maxLength={500}
                            required
                            value={newProduct.description}
                            onChange={handleNewProductChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Precio</label>
                        <input
                            type="number"
                            className="form-control"
                            name="price"
                            id="price"
                            required
                            value={newProduct.price}
                            onChange={handleNewProductChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Categoría</label>
                        <select
                            className="form-control"
                            name="category"
                            id="category"
                            required
                            value={newProduct.category}
                            onChange={handleNewProductChange}
                        >
                            {categorias.map(({ id, name }) => (
                                <option key={id} value={id}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Imagenes</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="image"
                            multiple 
                            accept=".png, .jpg, .jpeg"
                            onChange={handleImageChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Crear</button>
                </form>
            </div>
        </>
    )
}

export default NewProduct;