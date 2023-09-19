import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Meals from './components/Meals/Meals.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    loader: () =>
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/:categoryName',
        element: <Meals></Meals>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
