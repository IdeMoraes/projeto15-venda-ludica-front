
import React, { useState } from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import UserContext from "./contexts/UserContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App(){
    const [userToken, setUserToken] = useState('');
    return(
        <UserContext.Provider value={{userToken, setUserToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;