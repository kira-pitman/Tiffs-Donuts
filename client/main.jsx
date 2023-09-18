import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/input.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Donut from "./pages/Donut.jsx";

export const routes = createRoutesFromElements(
    <Route path={'/'} element={<App/>}>
        <Route index element={<Donut/>}/>
    </Route>
)

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
