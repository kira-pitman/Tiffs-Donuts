import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/input.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Donut from './pages/Donut.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

export const routes = createRoutesFromElements(
  <Route path={'/'} element={<App />}>
    <Route index element={<Donut />} />
    <Route path={'/me'} element={<h1>Nothing here yet!</h1>} />
  </Route>
)

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="mako-tiffsdonuts.au.auth0.com"
    clientId="1gMtmY7xCt6ZtERLwpjCwtAw5NLewfYR"
    audience="https://tiffsdonuts/api"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Auth0Provider>
)
