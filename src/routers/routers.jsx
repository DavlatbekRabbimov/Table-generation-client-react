import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {GenerationTable} from "../pages/generation-table.jsx";

export const Routers = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<GenerationTable/>}/>
            </Routes>
        </BrowserRouter>
    );
}
