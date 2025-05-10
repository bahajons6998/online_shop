import React, { useEffect, useState } from "react";
import { get_products } from "../../utils/Api_fetch";
import { Link } from "react-router";

export default function Products() {
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
            <h4 className="my-3">Home/Products</h4>
            <div className="row">
                {products.map((product) => {
                    const { _id, image, title, brand, color, price } = product;
                    return (
                        <div className="col-md-3 mb-4" key={_id}>
                            <Link to={`/product/${_id}`} className="text-decoration-none">
                                <div className="card h-100">
                                    <img
                                        src={image || "https://via.placeholder.com/150"}
                                        className="card-img-top"
                                        alt={title}
                                        style={{ height: "200px", objectFit: "contain" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Nomi:{title}</h5>
                                        <p className="card-text">Brand:{brand}</p>
                                        <p className="card-text">Rangi:{color}</p>
                                        <p className="card-text">Narxi:{price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
