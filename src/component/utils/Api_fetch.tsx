import axios from "axios";
import { base_url } from "./base_url";
import Axios from "./Axios";

async function get_products() {
    return await axios.get(`${base_url}/products`,)
}
async function get_product_detail(id:Object) {
    return await axios.get(`${base_url}/products/${id}`,)
}
                // U S E R 
async function login_user(user: Object) {
    return await axios.post(`${base_url}/auth/login`, user)
}
async function register_user(user: Object) {
    return await axios.post(`${base_url}/auth/register`, user)
}
async function add_wishlist(data: Object) {
    return await Axios().put(`${base_url}/products/wishlist`, data)
}
async function get_wishlist() {
    return await Axios().get(`${base_url}/products/wishlist`,)
}

export { login_user, register_user, get_products,get_product_detail, add_wishlist, get_wishlist }