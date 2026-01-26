import React, {useEffect, useState} from 'react';
import '../custom.css';
import ProjectCard from '../components/cards/ProjectCard.jsx';
import {fetchProjects} from '../services/fetchData.js';

const Projects = () => {
  const [data, setData]=useState([]);
  const [resp, setResp]=useState({message:"testing"});
  
  const handleData= async ()=>{
    try {
      const res = await fetchProjects();
      if(res.success){
        setData(res.projects);
      }
      else{
        setResp(res.message);
      }
    } catch (error) {
      console.error(error);
    }
    
  }
  handleData();
  
  return(
    <section id="projects">
      <div className="my-16">
        <h2>Projects</h2>
      {data.length?
      <div className="project-container my-8">
        {
          data.map((proj, index) =>(
            <ProjectCard project={proj}>
              <img className="projimage" src={`${proj.path}`}
              alt={proj.title}/>
            </ProjectCard>
          ))
        }
      </div>:<p className='text-center'>Please Wait...</p>
      }
      </div>
    </section>
  );
  
};

export default Projects;