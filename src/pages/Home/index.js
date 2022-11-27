import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
//import UserContext from "../../contexts/UserContext";
//import {Link} from "react-router-dom";
import { getProducts } from "../../services/api";
//import axios from "axios"
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


function Home(){
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [showProducts, setShowProducts] = useState([]);
    const [message, setMessage] = useState("");
    useEffect(() => {
        getProducts()
          .then((response) => {
            setProducts(response.data);
        })
          .catch((error) => alert("Ocorreu um erro,logue novamente"));
      }, []);
    
    function filterAray(e){
        e.preventDefault();
        setMessage("");
        const productsFilter = products.filter((element)=>element.name.includes(search));
        if(productsFilter.length===0){
            setMessage(`Nenhum produto encontrado com ${search}`)
        }
        setShowProducts(productsFilter);
    }
    function filterAll(){
        setShowProducts(products);
        setMessage("");
}
    function filterBooks(){
            const productsFilter = products.filter((element)=>element.department==="Livro");
            setShowProducts(productsFilter);
            setMessage("");
    }
    function filterAlbuns(){
        const productsFilter = products.filter((element)=>element.department==="Álbum musical");
        setShowProducts(productsFilter);
        setMessage("");
    }
    function filterJogos(){
        const productsFilter = products.filter((element)=>element.department==="Jogo eletrônico");
        setShowProducts(productsFilter);
        setMessage("");
    }
    function filterFilmes(){
        const productsFilter = products.filter((element)=>element.department==="Filme");
        setShowProducts(productsFilter);
        setMessage("");
    }
    function filterSeries(){
        const productsFilter = products.filter((element)=>element.department==="Série de TV");
        setShowProducts(productsFilter);
        setMessage("");
    }
    return(
        <>
            <Container>
                <form onSubmit={filterAray}>
                    <input
                    type="text"
                    placeholder= "Pesquise pelo nome do produto"
                    onChange= {(e)=>setSearch(e.target.value)}
                    /> 
                    <button type="submit"><ion-icon name="search"></ion-icon></button>
                </form>
                <Categorias>
                    <h1 onClick={()=>filterAll()}>Todos</h1>
                    <h1 onClick={()=>filterBooks()}>Livros</h1>
                    <h1 onClick={()=>filterAlbuns()}>Álbuns</h1>
                    <h1 onClick={()=>filterJogos()}>Jogos</h1>
                    <h1 onClick={()=>filterFilmes()}>Filmes</h1>
                    <h1 onClick={()=>filterSeries()}>Séries de TV</h1>
                </Categorias>
                <Message className={message.length!==0? "aparece": "some"}>
                    <h2>{message}</h2>
                    <h1 onClick={()=>filterAll()}>Voltar a comprar</h1>
                </Message>
                <ContainerProducts className={message.length===0? "aparece": "some"}>
                    {showProducts.length!==0 ? showProducts.map((p)=>
                    <Product onClick={()=>{navigate(`/products/${p._id.toString()}`)}}><h1>{p.name}</h1><img src={p.image}/><h1>{p.price}</h1></Product>)
                    :
                    products.map((p)=>
                    <Product onClick={()=>{navigate(`/products/${p._id.toString()}`)}}><h1>{p.name}</h1><img src={p.image}/><h1>{p.price}</h1></Product>)}
                </ContainerProducts>
            </Container>
            <Navbar/>   
        </>
    )
}

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    width:100%;
    min-height: 100vh;
    background-color: #f4f4f4;
    .some{
        display:none;
    }
    form{
        display: flex;
        margin-bottom: 36px;
        margin-top:40px;
        justify-content:center;
        align-items: center;
    }
    input {
        display:flex;
        align-items: center;
        padding-left: 20px;
        width: 300px;
        height: 48px;
        border-radius: 30px;
        border:none;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        background-color: white;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        box-sizing: border-box;
      }
      button{
        border:none;
        width:40px;
        height: 40px;
        background-color: #f4f4f4;
        margin-left:5px;
      }
      ion-icon{
        font-size: 30px;
      }
`
const Categorias= styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    margin-bottom: 36px;
    h1{
        cursor:pointer;
        font-size:12px;
    }
`
const Message = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    h1{
        cursor:pointer;
        font-size:20px;
        margin-top:36px;
    }
`
const ContainerProducts = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
    h1{
        cursor:pointer;
        font-size:20px;
    }
`
const Product =styled.div`
    width:170px;
    height:250px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-around;
    padding:8px;
    border-radius: 5px;
    border:none;
    background-color:#ffffff;
    margin-bottom:20px;
    img{
        width:100px;
    }
    h1{
        font-size:10px;
    }
`