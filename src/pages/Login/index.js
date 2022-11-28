import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext.js";
import {postLogin} from "../../services/api.js";
import {Container} from "../SignUp/index.js";

function Login(){
    const navigate = useNavigate();
    const {setUserToken} = useContext(UserContext);
    const[form, setForm]= useState({});

        function sendForm(e){
            e.preventDefault();
            postLogin(form)
              .then((response) => {
                setUserToken(response.data.token)
                console.log(response.data.token);
                navigate("/home");
              })
              .catch((error) => {
                console.log(error);
                alert(`
              ${error.message} 
              Por favor preencha os campos novamente.`);
              });
        }

    function updateImput(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return(
        <Container>
            <h1>LOGO</h1>
            <form onSubmit={sendForm}>
                <input
                    name= "email"
                    type= "email"
                    placeholder= "E-mail"
                    autoComplete="off"
                    required
                    onChange={updateImput}
                />
                <input
                    name= "password"
                    type="password"
                    placeholder= "Senha"
                    required
                    autoComplete="off"
                    onChange={updateImput}
                />
                <button type="submit">Entrar</button>
            </form>
            <Link to={`/sign-up`}><p>Não tem uma conta? Candatre-se agora!</p></Link>
        </Container>
    )
}

export default Login;
