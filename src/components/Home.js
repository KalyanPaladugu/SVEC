import React from 'react';
import {BrowserRouter,Routes,Route,Link}  from 'react-router-dom'
import FormRendering from './FormRendering';

export default function Home() {
    return (
        <div>
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Main />}></Route>
            <Route path="/login" element={<FormRendering />}></Route>
        </Routes>
        </BrowserRouter>

        </div>
    )
}


function Main(){

    return (
        <>
         <h1>:: Home Page ::</h1>
         <Link to="/login"><button> Login</button></Link>
        </>
    )
}
