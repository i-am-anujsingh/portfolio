import React,{ useEffect } from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import  Navbar from './components/Navbar'


function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App;