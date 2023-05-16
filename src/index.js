import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Webpage from './page/webpage';
import Home1 from './page/home1';
import Login1 from './page/login1';
import Register1 from './page/register1';
import About1 from './page/about1';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/home1",
    element:<Home1/>
  },
  {
    path:"/register1",
    element:<Register1/>
  },
  {
    path:"/about1",
    element:<About1/>
  },
  {
    path:"/login1",
    element:<Login1/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
