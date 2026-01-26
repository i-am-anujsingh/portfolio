import React,{useEffect, useState} from 'react';
import '../custom.css'
import img0 from '../assets/images/myimg/dp1.jpg'
import img1 from '../assets/images/myimg/sunset.jpg'
import img2 from '../assets/images/myimg/statue.jpg'
import img3 from '../assets/images/myimg/mirror.jpg'
import img4 from '../assets/images/myimg/suit.jpg'
import img5 from '../assets/images/myimg/myself3.jpg'

const Hero = () => {
  let l=[img1,img2,img3,img4,img5,img0];
  const [img,setImg]=useState(l[l.length-1]);
  return (
  <>
    <section 
    id="hero"
    className="h-[100vh] md:h-auto w-[100%] text-white p-[1rem] md:py-[10rem] ">
      
      {/*IMAGE DIV*/}
      <div className="h-[40%] w-full flex justify-center items-center my-[4rem]">
        <img
        id='dp'
        src={img}
        className="h-[14rem] w-[14rem] md:h-[20rem] md:w-[20rem] border-2 border-gray-300 rounded-full transition-all my-20">
        </img>
      </div>
      
       {/*Intro Div*/}
      <div className="w-auto text-center h-full mt-1 md:mt-2 ">
        <div className='py-5 w-auto h-auto'>
          <h1
          className='my-4 font-extrabold text-2xl md:text-4xl '
          >Welcome to My Portfolio</h1>
          <pre
          className='mb-6 text-sm md:text-2xl font-mono'
          >Developer || Designer || Innovator</pre>
          <a
            className='md:text-2xl'
            href="#about">About Me</a>
        </div>
      </div>
    </section>
    <section id="about">
      <h2>About Me</h2>
      <p
      className='text-white'
      >Aspiring Web Developer with hands-on experience in projects. Skilled in building scalable  and interactive web apps. Passionate about clean code, UI/UX, and continuous learning. Eager to contribute to impactful projects and grow in tech.
      </p>
    </section>
  </>
  );
};

export default Hero;