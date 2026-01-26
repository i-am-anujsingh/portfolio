import React from 'react';
import '../../custom.css';


const ProjectCard = ({children, project}) => {
  return (
    <div className="project-card w-auto">
      <h1 className="font-bold text-2xl my-2 text-grad">{project.title}</h1>
      {children}
      <p className='text-sm text-gray-300 py-4'>
      <b className='text-grad'>Role:</b> {project.role}</p>
      <p className='text-sm text-gray-300'>{project.detail}</p>
      <p className='text-sm text-gray-300 py-3'><b className='text-grad'>Technology:</b> {project.technology}</p>
      <div className="w-full h-auto p-4 flex justify-around">
        <a className='md:text-2xl' href={project.repo} target='_blank'>View on GitHub</a>
        <a className='md:text-2xl' href={project.weblink} target='_blank'>Live Demo</a>
      </div>
    </div>
  );
};


export default ProjectCard;