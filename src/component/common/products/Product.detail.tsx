import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { get_product_detail } from "../../utils/Api_fetch";

export default function Product() {
const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({image:"",title:"",price:0,description:""});
    useEffect(() => {
        getProduct();
    }, []);

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
            <div>
                <img src={product?.image} alt="" />
            </div>
            
        </div>
    )
}