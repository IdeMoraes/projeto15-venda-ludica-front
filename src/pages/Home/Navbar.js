import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <NavbarContainer>
        <Link to={`/home`}><ion-icon name="home"></ion-icon></Link>
        <Link to={`/cart`}><ion-icon name="cart"></ion-icon></Link>
        <Link to={`/`}><ion-icon name="log-out"></ion-icon></Link>
        </NavbarContainer>
    )
}
const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
    width:100%;
    height: 80px;
    background-color:#ffffff;
    position:fixed;
    z-index:1;
    bottom: 0;
    right: 0;
    ion-icon{
        font-size: 40px;
        text-decoration: none;
    }

`