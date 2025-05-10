import React, { useEffect, useState } from "react";
import { get_products } from "../utils/Api_fetch";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        get_products()
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            });
    }

    return (
        <div className="container mt-4">
            <div className="row">
                {products.map((product) => {
                    const { id, image, title, brand, color } = product;
                    return (
                        <div className="col-md-3 mb-4" key={id}>
                            <div className="card h-100">
                                <img
                                    src={image || "https://via.placeholder.com/150"}
                                    className="card-img-top"
                                    alt={title}
                                    style={{ height: "200px", objectFit: "contain" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{brand}</p>
                                    <p className="card-text">{color}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
