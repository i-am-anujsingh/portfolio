import React from 'react';
import  Hero from '../components/Hero';
import Achievements from './Achievements.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import  Footer from '../components/Footer'

const Home = () => {
  return (
  <>
  <Hero />
  <Skills/>
  <Projects/>
  <Achievements/>
  <Footer />
   </>
  )
};

export default Home;