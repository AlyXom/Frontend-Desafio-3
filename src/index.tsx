import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './routes/Home';
import Shop from './routes/Shop';
import SingleProduct from './routes/SingleProduct';
import "./index.css"
import { Provider } from 'react-redux';
import { store } from './redux/store';

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
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
