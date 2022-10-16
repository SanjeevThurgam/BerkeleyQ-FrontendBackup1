import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from './ErrorPage';
import LandingPage from './LandingPage';
import ClassPage from './ClassPage';
import ContactForm from './ContactForm';
import ClassSearchPage from './ClassSearchPage';
import Contact from './Contact';
import About from './About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>
  },
  {
    path: "classPage/cs162",
    element: <ClassPage/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "classSearchPage",
    element: <ClassSearchPage/>,
  },
  {
    path: "about",
    element: <About/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
