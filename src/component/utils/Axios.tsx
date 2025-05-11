import axios from "axios";
import { base_url } from "./base_url";

const Axios = () => {
    const token = localStorage.getItem('token');
    const defaultOptions = {
        // url: base_url,
        headers: token ? { Authorization: `Bearer ${token}`, } : {},
        // params: { lan: localStorage.getItem('i18nextLng') || 'uz', }
    };
    return {
        get: (url: string, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
        post: (url: string, data: Object, options = {}) =>
            axios.post(url, data, { ...defaultOptions, ...options }),
        put: (url: string, data: Object, options = {}) =>
            axios.put(url, data, { ...defaultOptions, ...options }),
        patch: (url: string, data: Object, options = {}) =>
            axios.patch(url, data, { ...defaultOptions, ...options }),
        delete: (url: string, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
    };
};
export default Axios;