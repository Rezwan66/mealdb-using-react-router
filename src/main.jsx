import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
