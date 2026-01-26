import React from 'react';
import  '../custom.css';

const Navbar = () => {
  const admin = localStorage.getItem('token');
  
  return (
    <nav>
      <div className='navigation-bar' >
        <a href="/" className='md:text-2xl'>Home</a>
        <a href="/#skills" className='md:text-2xl'>Skills</a>
        <a href="/#achievements" className='md:text-2xl'>Achievements</a>
        <a href="/#projects" className='md:text-2xl'>Projects</a>
        {admin? 
        <button 
        className=""
        onClick={(e)=>{
          e.preventDefault();
          localStorage.removeItem('token');
          window.location.reload();
        }}
        >[–›
        </button> :<a href="/#contact" className='md:text-2xl'>Contact</a>
        }
        { admin?<a 
          href="/iadmin/adminpanel"
          className="md:text-2xl">Admin
          </a>:null
        }
      </div>
    </nav>
  );
};


export default Navbar;