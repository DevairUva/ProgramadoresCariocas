import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Pesquisa from './components/Pesquisa';

const router = createHashRouter(
  [
    {
      path: "/",
      element: <App/>,
      errorElement: <h1>Erro 404. Está pág não existe.</h1>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/pesquisa",
          element: <Pesquisa/>
        }
      ]
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
