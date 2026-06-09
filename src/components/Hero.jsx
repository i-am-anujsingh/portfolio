import React,{useEffect, useState} from 'react';
import '../custom.css'
import img from '../assets/images/my.jpg'

const Hero = () => {

  return (
  <>
    <section 
    id="hero"
    className="md:h-auto w-[100%] text-white p-[1rem] md:py-[10rem] ">
      
      {/*IMAGE DIV*/}
      <div className="h-[40%] w-full flex justify-center items-center my-[4rem]">
        <img
        id='dp'
        src={img}
        className="h-[14rem] w-[14rem] md:h-[20rem] md:w-[20rem] border-2 border-gray-300 rounded-full transition-all">
        </img>
      </div>
      
       {/*Intro Div*/}
      <div className="w-auto text-center h-full mt-1 md:mt-2 ">
        <div className='py-8 w-auto h-auto intro'>
          <h1
          className='my-4 font-extrabold text-2xl md:text-4xl'
          >Welcome to My Portfolio</h1>
          <pre
          className='robotic-text text-grad'
          >Developer || Explorer || Innovator</pre>
        </div>
      </div>
    <section id="about">
      <h2># About Me</h2>
      <p
      className='text-white'
      >Software Developer with hands-on experience building full-stack web applications using the MERN stack and Django. Skilled in backend development, REST API design, database integration, and deployment. Passionate about software engineering, Artificial Intelligence, and building scalable applications that solve real-world problems. Currently pursuing a Bachelor of Computer Applications (BCA) and continuously strengthening expertise in Data Structures & Algorithms, System Design, and AI-powered software development.
      </p>
    </section>
    </section>
  </>
  )
};

export default Hero;