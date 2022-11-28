import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext.js";
import { postOrder } from "../../services/api.js";
import Navbar from "../Home/Navbar.js";
import {Container} from "../SignUp/index.js";

function CheckoutPage(){
    const {userToken} = useContext(UserContext);
    const navigate = useNavigate();
    const [adress, setAdress] = useState({});
    const [recipient, setRecipient] = useState({});

    function sendForm(e){
        e.preventDefault();
        const body =
            {
                adress,
                recipient,
                payment: {paymentMethod: "Boleto"}
            };
        postOrder(body, userToken)
          .then((res) => {
            console.log(body);
            alert("Pedido efetuado com sucesso.");
            navigate("/home");
          })
          .catch((error) => {
            alert(`
          ${error.message} 
          Seu pedido não foi efetuado!`);
          });
    };
    function updateAdress(e){
        setAdress({
            ...adress,
            [e.target.name]: e.target.value
        });
    };
    function updateRecipient(e){
        setRecipient({
            ...recipient,
            [e.target.name]: e.target.value
        });
    };
    const mystyle = {
        color: "white",
        marginBottom: "10px"
      };
    return(
        <>
        <Container>
            <h1>LOGO</h1>
            <h2 style={mystyle}>Termine seu pedido:</h2>
            <form onSubmit={sendForm}>
                <input
                    name= "country"
                    type= "text"
                    placeholder= "País"
                    autoComplete="off"
                    required
                    onChange={updateAdress}
                />
                <input
                    name= "state"
                    type="text"
                    placeholder= "Estado"
                    required
                    autoComplete="off"
                    onChange={updateAdress}
                />
                <input
                    name= "city"
                    type="text"
                    placeholder= "Cidade"
                    required
                    autoComplete="off"
                    onChange={updateAdress}
                />
                <input
                    name= "area"
                    type="text"
                    placeholder= "Bairro"
                    required
                    autoComplete="off"
                    onChange={updateAdress}
                />
                <input
                    name= "street"
                    type="text"
                    placeholder= "Rua"
                    required
                    autoComplete="off"
                    onChange={updateAdress}
                />
                <input
                    name= "zipCode"
                    type="number"
                    placeholder= "Código de Endereçamento Postal"
                    required
                    autoComplete="off"
                    onChange={updateAdress}
                />
                <input
                    name= "houseNumber"
                    type="number"
                    placeholder= "Número da Residência"
                    required
                    autoComplete="off"
                    onChange={updateAdress}
                />
                <input
                    name= "complement"
                    type="text"
                    placeholder= "Complemento"
                    required
                    autoComplete="off"
                    onChange={updateAdress}
                />
                <input
                    name= "name"
                    type="text"
                    placeholder= "Nome do Destinatário"
                    required
                    autoComplete="off"
                    onChange={updateRecipient}
                />
                <input
                    name= "phoneNumber"
                    type="text"
                    placeholder= "Celular do Destinatário"
                    required
                    autoComplete="off"
                    onChange={updateRecipient}
                />
                <input
                    name= "paymentMethod"
                    type="text"
                    placeholder= "Boleto"
                    required
                    autoComplete="off"
                    value="Boleto"
                    disabled="disabled"
                />
                <button type="submit" style={{marginBottom: "80px"}}>Efetuar pedido</button>
            </form>
        </Container>
        <Navbar/>
        </>
    )
}

export default CheckoutPage;
