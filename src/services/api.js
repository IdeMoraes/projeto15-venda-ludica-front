import axios from "axios";

const BASE_URL = "http://localhost:5000";

/*export function createHeaders(){
    const config ={
        headers: {
            authorization: `Bearer ${token}`,
        },
    };
    return config;
}*/

export function postSignUp(signUp){
    const promise = axios.post(`${BASE_URL}/sign-up`, signUp);
    return promise;
}

export function postLogin(login){
    const promise = axios.post(`${BASE_URL}/login`, login);
    return promise;
};

export function getProducts(){
    const promise = axios.get(`${BASE_URL}/products`);
    return promise;
};

export function getProduct(productId){
    const promise = axios.get(`${BASE_URL}/products/${productId}`);
    return promise;
};