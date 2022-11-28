import React, { useContext } from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Navbar from "../Home/Navbar.js";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, postCart } from "../../services/api.js";
import UserContext from "../../contexts/UserContext.js";


function ProductPage(){
    const navigate = useNavigate();
    const {userToken} = useContext(UserContext)
    const parameter = useParams();
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
        getProduct(parameter.productId)
          .then((response) => {
            setProduct(response.data);
        })
          .catch((error) => console.log(error));
      }, []);
    
    function handleAdding(){
        const newProductToCart = {productId: parameter.productId, quantity};
        if(userToken){
            postCart(newProductToCart, userToken);
            alert("Produto adicionado ao carrinho com sucesso.");
            navigate("/home");
        }
        else{
            alert("Faça login para adicionar produtos ao carrinho.");
            navigate("/");
        }

    }
    return(
        <>
            <Container>
                <Name> {product.name}</Name>
                <img src={product.image}/>
                <div > R${product.price? product.price.slice(0,-2) + "," + product.price.slice(-2) : ""}</div>
                <Description> {product.description}</Description>
                <Details>
                    <div> <bold>Categoria: </bold>{product.department}</div>
                    {product.author? <div><bold>Autor:  </bold>{product.author}</div> : <></>}
                    {product.published? <div><bold>Publicado em: </bold>{product.published}</div> : <></>}
                    {product.artist? <div><bold>Artista: </bold>{product.artist}</div> : <></>}
                    {product.studio? <div><bold>Gravadora: </bold>{product.studio}</div> : <></>}
                    {product.recorded? <div><bold>Gravação: </bold>{product.recorded}</div> : <></>}
                    {product.director? <div><bold>Diretor: </bold>{product.director}</div> : <></>}
                    {product.creator? <div><bold>Criador: </bold>{product.creator}</div> : <></>}
                    {product.productionCompany? <div><bold>Empresa produtora: </bold>{product.productionCompany}</div> : <></>}
                    {product.release? <div><bold>Lançamento: </bold>{product.release}</div> : <></>}
                    {product.language? <div><bold>Idioma: </bold>{product.language}</div> : <></>}
                    {product.developer? <div><bold>Desenvolvedora: </bold>{product.developer}</div> : <></>}
                    <div> <bold>Formato: </bold>{product.format}</div>
                </Details>
                <div> Quantidade desejada: {product.stock? <input type={"number"} min={0} max={product.stock} onChange={(e)=>setQuantity(parseInt(e.target.value))}></input>:<input type={"number"} min={0}></input>}</div>
                {product.stock? <div>({product.stock} em estoque)</div> : ""}
                <button onClick={handleAdding}>Adicionar ao carrinho</button>
            </Container>
            <Navbar/>
        </>
    );
};

export default ProductPage;

const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    width:100%;
    min-height: 100vh;
    background-color: #f4f4f4;
    padding-top: 40px;
    padding-bottom: 100px;
    padding-left: 10px;
    padding-right: 10px;
    img{
        height: 300px;
        margin-top: 25px;
        margin-bottom: 20px;
    };
    div{
        margin-bottom: 15px;
    };
    input{
        width: 50px;
        height: 30px;
        border-radius: 5px;
        font-weight: bold;
    };
    button{
        background-color: #A328D6;
        width: 326px;
        height: 46px;
        border:none;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        cursor:pointer;
        border-radius: 5px;
    }
    bold{
        font-weight: 500;
        color: #A328D6;
    }
`;
const Details = styled.div`
    margin-bottom: 20px;
    padding-left: 10px;
    div{
        margin-bottom: 0px;
    }
`;
const Name = styled.div`
    font-size: 20px;
    font-weight: bolder;
`;
const Description = styled.div`
    text-align: justify;
    text-justify: auto;
    max-width: 326px;
`;