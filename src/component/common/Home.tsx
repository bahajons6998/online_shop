import axios from "axios";
import React, {JSX, useEffect, useState} from "react";
import { get_products } from "../utils/Api_fetch";

export default function Home(){

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

 function getProducts(){
    get_products()
    .then((res) => {
        console.log(res.data);
        setProducts(res.data);
    }).catch((err) => {
        console.log(err)
    })    
    // setProducts(products);
}


        return (<div className="container">
        
        <div className="row">
            {products.map((product, index) => {
                return <div className="col-md-3" key={index}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product?.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">{product.price}</p>
                        </div>
                    </div>
                </div>
            })}
            </div>
    </div>)
}