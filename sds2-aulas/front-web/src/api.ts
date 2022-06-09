import axios from "axios";

const API_URL ='http://localhost:8080/products';

export function fecthProducts() {

    return axios(`${API_URL}`)
    
    
}