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

/*export function getProducts(){
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/products`, config);
}*/