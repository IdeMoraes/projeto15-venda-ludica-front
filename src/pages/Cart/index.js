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
    const navigate = useNavigate();
    useEffect(() => {
        getCart(userToken)
          .then((response) => {
            setCartProducts(response.data);
            //console.log(response.data);
        })
          .catch((error) => console.log(error));
          console.log(userToken);
      }, []);
    function closeCart(){
      if(!userToken){
        alert("Faça login para adicionar produtos ao carrinho.");
        navigate("/");
        return;
      }
      navigate("/checkout");
    }
    return(
        <>
        <Container>
          <h1>Carrinho</h1>
          {cartProducts.map((p,index)=>
          <DivProduct>
          <DivImagem>
            {p.name}
            <img src={p.image}/>
          </DivImagem>
          {p.quantity}
          {/* <button onClick={()=>updateProduct(p.productId, p.quantity)}>+</button> */}
          </DivProduct>
          )}
        <button onClick={()=>closeCart()}>Fechar Pedido</button>
        </Container>
        <Navbar/>
        </>
    );
}
export default Cart;

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  min-height: 100vh;
  padding-bottom: 90px;
  h1{
    margin-top:20px;
    margin-bottom:20px;
  }
`
const DivProduct= styled.div`
  display:flex;
  width:90%;
  height: 250px;
  justify-content:space-around;
  background-color:#ffffff; 
  align-items: center;
  margin-bottom: 20px;
  box-sizing:border-box;
`
const DivImagem = styled.div`
  display:flex;
  width:50%;
  flex-direction: column;
  img{
    width:80%;
  }
`