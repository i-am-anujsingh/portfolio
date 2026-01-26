import React,{ useState, useEffect} from 'react';
import '../custom.css'
import SkillCard from '../components/cards/SkillCard'
import { FaCode, FaGlobe, FaDatabase, FaPaintbrush, FaLanguage} from 'react-icons/fa6';
import {fetchSkills} from '../services/fetchData.js';

const Symbol =({sym}) =>{
  if(sym===0) return <FaCode/>
  else if(sym===1) return <FaGlobe/>
  else if(sym===2) return <FaDatabase/>
  else if(sym===3) return <FaPaintbrush/>
  else if(sym===4) return <FaLanguage/>
}

const Skills = () =>{
  const [skills, setSkills]=useState(null);
  
  const handleData=async()=>{
    try {
      const res = await fetchSkills();
      if(res.success){
        setSkills(res.skills);
      }
      else{
        alert(res.message)
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  handleData();
  
  return(
    <section id='skills'>
      <div className="my-6">
        <h2>Skills</h2>
        <div className="skills-container text-center">
          { skills?(
            skills.map((skill, index) => (
              <SkillCard 
              key={index}
              skill={skill}>
                {/*<div className="flex justify-center text-5xl">
                  <Symbol sym={index} />
                </div>*/}
              </SkillCard>
            ))
            ):<p
            className='text-center'
            >Please Wait...</p>
          }
        </div>
      </div>
    </section>
  );
}



export default Skills;