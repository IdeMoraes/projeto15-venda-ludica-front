
import React, { useState } from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import UserContext from "./contexts/UserContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App(){
    const [userToken, setUserToken] = useState('');
    return(
        <UserContext.Provider value={{userToken, setUserToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;