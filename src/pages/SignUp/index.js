import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {postSignUp} from "../../services/api.js"

function SignUp(){
    const navigate = useNavigate();
    const[form, setForm]= useState({});

        function sendForm(e){
            e.preventDefault();
            postSignUp(form)
              .then((response) => {
                navigate("/");
              })
              .catch((error) => {
                alert(`
              ${error.response.data.message} 
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
                    name= "name"
                    type= "text"
                    placeholder= "Nome"
                    autoComplete="off"
                    required
                    onChange={updateImput}
                />
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
                <input
                    name= "check"
                    type= "password"
                    placeholder= "Confirme a senha"
                    required
                    autoComplete="off"
                    onChange={updateImput}
                />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to={`/`}><p>Já tem uma conta? Entre agora!</p></Link>
        </Container>
    )
}

export default SignUp;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width:100%;
    background-color: black;
    font-family: 'Raleway';
    h1{
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px; 
        color: #FFFFFF;   
        margin-bottom:24px;    
    }
    form{
        display: flex;
        flex-direction:column;
        margin-bottom: 36px;
    }
    input {
        padding-left: 10px;
        width: 326px;
        height: 58px;
        border: none;
        border-radius: 5px;
        margin-bottom: 13px;
        background-color: white;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        box-sizing: border-box;
      }
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
      p{
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
      }
`
export {
    Container
};