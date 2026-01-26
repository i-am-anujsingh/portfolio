import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Home from './pages/Home'
import Admin from './pages/Admin'
import LoginPage from './pages/LoginPage'
import AuthLayer from './components/AuthLayer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "", 
        element: <Home />,
      },
      {
        path: 'iadmin/adminpanel',
        element: <AuthLayer><Admin/></AuthLayer>,
      },
      {
        path: 'iadmin/login',
        element:<LoginPage/>,
      },
    ],
  },
  {
    path:"*",
    element: 
    <div className="h-[89vh] w-full flex justify-center items-center">
      <h1 className="text-grad text-center text-4xl">404 ERROR !</h1>
    </div>,
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);

