import axios from "axios";
import { base_url } from "./base_url";

async function login_user(user: Object) {
    return await axios.post(`${base_url}/auth/login`, user)
}
async function register_user(user: Object) {
    return await axios.post(`${base_url}/auth/register`, user)
}



export { login_user,register_user }