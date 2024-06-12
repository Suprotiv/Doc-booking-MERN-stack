import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Screens/Main';
import FindDoctors from './Screens/FindDoctors';
import DoctorsDetails from './Screens/DoctorsDetails';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Docprofile from './Screens/Docprofile';
import Account from './Screens/Account';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Main/></div>,
  },
  {
    path: "/doctors",
    element: <div><FindDoctors/></div>,
  },
  {
    path: "/doctors/:original_title",
    element: <div><DoctorsDetails/></div>,
  },
  {
    path: "/doctorprofile/:original_title",
    element: <div><Docprofile/></div>,
  },
  {
    path: "/userprofile/:original_title",
    element: <div><Main/></div>,
  },
  {
    path: "/login",
    element: <div><Login/></div>,
  },
  {
    path: "/signup",
    element: <div><Signup/></div>,
  },
  {
    path: "/account",
    element: <div><Account/></div>,
  },
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
