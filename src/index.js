import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
const route = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/About-us',
    element: <About/>
  },
  {
    path: '/Explore',
    element: <Explore/>
  },
  {
    path: '/Contact-Us',
    element: <Contact/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
