import React, { useContext } from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Navbar from "../Home/Navbar.js";
import { useNavigate, useParams } from "react-router-dom";
import { getCart} from "../../services/api.js";
import UserContext from "../../contexts/UserContext.js";

function Cart(){
    const {userToken} = useContext(UserContext);
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        getCart(userToken)
          .then((response) => {
            setCartProducts(response.data);
            console.log(response.data);
        })
          .catch((error) => console.log(error));
          console.log(userToken);
      }, []);
    

    return(
        <>
        <li>olaaa</li>
        <Navbar/>
        </>
    );
}
export default Cart;