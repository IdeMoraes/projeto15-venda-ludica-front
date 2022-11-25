import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
//import UserContext from "../../contexts/UserContext";
//import {Link} from "react-router-dom";
import { getProducts } from "../../services/api";
//import axios from "axios"


function Home(){
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('Dom');
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
    function reload(){
        window.location.reload();
    }
    return(
        <Container>
        <form onSubmit={filterAray}>
        <input
        type="text"
        placeholder= "Pesquise pelo nome do produto"
        onChange= {(e)=>setSearch(e.target.value)}
        /> 
        <button type="submit">pesquisar</button>
        </form>
        <button onClick={()=>filterBooks()}>Livros</button>
        <button onClick={()=>filterAlbuns()}>Álbuns</button>
        <button onClick={()=>filterJogos()}>Jogos</button>
        <button onClick={()=>filterFilmes()}>Filmes</button>
        <button onClick={()=>filterSeries()}>Séries de TV</button>
        <div className={message.length!==0? "aparece": "some"}>
            <h1>{message}</h1>
            <h1 onClick={()=>reload()}>Voltar a comprar</h1>
        </div>
        <ul className={message.length===0? "aparece": "some"}>{showProducts.length!==0 ? showProducts.map((p)=><li>{p.name}</li>):products.map((p)=><li>{p.name}</li>)}</ul>
        </Container>   
    )
}

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction:column;
    height: 100vh;
    width:100%;
    .some{
        display:none;
    }
`