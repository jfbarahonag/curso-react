import React from "react";
import { Route, BrowserRouter, Routes } 
from "react-router-dom";
import App from "../App";
import Candle from "./candle";
import NotFound from "./notFound";
import Countries from "./countries";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={App()} />
            <Route path="/velas" element={Candle} />
            <Route path="/paises" element={Countries} />
        </Routes>
    </BrowserRouter>
)

export default Router;
