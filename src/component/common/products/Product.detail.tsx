import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { add_wishlist, get_product_detail } from "../../utils/Api_fetch";

export default function Product() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({ image: "", title: "", price: 0, color: '', description: "" });
    useEffect(() => {
        getProduct();
    }, []);

    function addtocard() {
        add_wishlist({ id })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }




    function getProduct() {
        get_product_detail(id as Object).
            then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.error("Error fetching product:", err);
            });
    }
    return (
        <div className="container">
            <Link to={'/'} className="text-decoration-none"> {`<Home`}</Link>
            <div className="row mt-3">
                <div className="col-md-6">
                    <img src={product?.image} alt="" className="my-3 w-100" />
                </div>
                <div className="col-md-6">
                    <h5>Title: {product.title}</h5>
                    <div className="d-flex"><b>Color</b><div style={{ width: '20px', height: '20px', marginLeft: '10px', backgroundColor: product.color }}></div> </div>

                    <h4>Price: {product.price}$</h4>
                    <button className="btn btn-primary mt-5" onClick={addtocard}>Add card</button>
                </div>
            </div>
        </div>
    )
}