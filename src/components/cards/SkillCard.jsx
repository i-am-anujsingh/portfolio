import React, {useState} from 'react';
import '../../custom.css'
const SkillCard = ({children, skill}) => {
  const [showSkill, setShowSkill]=useState(true);
  return (
    <button 
    onClick={
      (e)=>{
        e.preventDefault();
        setShowSkill((p)=>!p);
      }
    }
    className="skill w-[90%] md:w-[30%]">
      {/*children*/}
        <h3 className='my-2 font-extrabold text-xl text-grad'>{skill.area}</h3>
      { showSkill?
      <div className={``}>
        <div className="text-start w-[80%] m-auto px-4">
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
  );
};

export default SkillCard;