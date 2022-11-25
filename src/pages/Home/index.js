//import styled from "styled-components";
//import { useContext, useEffect, useState } from "react";
//import UserContext from "../../contexts/UserContext";
//import {Link} from "react-router-dom";
//import { getProducts } from "../../services/api";
// import axios from "axios"
import React from "react";

function Home(){
    /*const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [showProducts, setShowProducts] = useState([]);
    useEffect(() => {
        getProducts()
          .then((response) => {
            setProducts(response.data);
            const productsFilter = products.filter((element)=>element.name.startsWith(search));
            setShowProducts(productsFilter);
        })
          .catch((error) => alert("Ocorreu um erro,logue novamente"));
      }, []);
    
    return(
        <Container>
        <input
        type="text"
        value={search}
        onChange= {(ev)=>setSearch(ev.target.value)}
        /> 
        <ul>{showProducts.map((p)=><li>{p.name}</li>)}</ul>
        </Container>   
    )*/
    return(
        <div>Esta será a página de Home, espero que não de erro por favoooorrrr</div>
    )
}

export default Home;

/*const Container = styled.div`
    display: flex;
    flex-direction:column;
    height: 100vh;
    width:100%;
`*/