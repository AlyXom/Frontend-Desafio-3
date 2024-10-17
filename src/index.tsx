import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './routes/Home';
import Shop from './routes/Shop';
import SingleProduct from './routes/SingleProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/shop/",
    element: <Shop />
  },
  {
    path: "/singleproduct/:id",
    element: <SingleProduct /> 
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
