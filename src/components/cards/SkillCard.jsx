import React, {useState} from 'react';
import '../../custom.css'
import {DeletingSkills} from '../../services/Deleting';
import { useNavigate} from "react-router-dom";
import { ControlBtns } from '../controls/ControlBtns';

const SkillCard = ({children, skill}) => {
  const [showSkill, setShowSkill]=useState(true);
  const navigate =useNavigate()
  const admin = localStorage.getItem('token');
  
  return (
    <div
    className="skill w-[90%] md:w-[15%] border-3 border-gray-800"
    >
      <button
      className='w-full m-0' 
        onClick={
          (e)=>{
            e.preventDefault();
            setShowSkill((p)=>!p);
          }
        }
        >
          <h3 className='my-2 font-extrabold text-xl text-grad'><i>./ </i>{skill.area}</h3>
          { showSkill?
          <div className='h-full'>
            <div className="text-start w-[80%] m-auto px-4 skill-list">
              {
              skill.skills.map((aqu, index) => (
                <p key={index} >» {aqu}</p>
              ))
            }
            </div>
          </div>:
          <p className={` my-2 text-gray-300 text-justify`}>{skill.detail}</p>
          }
      </button>
      {/* {children} */}

      {/* Control Buttons for Skills */}
      <ControlBtns place="bottom-[5%]" id={skill._id} type={"skill"} obj={skill} fn={DeletingSkills}/>

    </div>
  );
};
export default SkillCard;