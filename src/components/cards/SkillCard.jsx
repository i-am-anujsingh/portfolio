import React, {useState} from 'react';
import '../../custom.css'
import {DeletingSkills} from '../../services/Deleting';
import { useNavigate} from "react-router-dom";

const SkillCard = ({children, skill}) => {
  const [showSkill, setShowSkill]=useState(true);
  const navigate =useNavigate()
  const admin = localStorage.getItem('token');
  
  return (
    <div
    className="skill w-[90%] md:w-[15%] border-3 border-gray-800"
    >
      <button
      className='w-full h-full m-0' 
        onClick={
          (e)=>{
            e.preventDefault();
            setShowSkill((p)=>!p);
          }
        }
        >
          <h3 className='my-2 font-extrabold text-xl text-grad'>{skill.area}</h3>
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
      { admin &&
        <div className='controls w-auto h-full m-0 p-0'>
          <button
          onClick={
            (e)=>{
              e.preventDefault();
              localStorage.setItem("update",JSON.stringify(skill));
              navigate("/iadmin/adminpanel/#addskill");
            }
          }
          className='w-full h-full m-0 p-0 bg-blue-500 rounded-lg'
          >update</button>
          <button
          onClick={
            async(e)=>{
              e.preventDefault();
              confirm('Are you sure you want to delete this skill?') && await DeletingSkills(skill._id);
            }
          }
          className='w-full h-full m-0 p-0 bg-red-500 rounded-lg'
          >delete</button>
        </div>
      }
    </div>
  );
};
export default SkillCard;