import React from 'react';
import '../../custom.css';
import { ControlBtns } from '../controls/ControlBtns';
import { DeletingAchievements} from "../../services/Deleting"


const AchievementCard = ({children, achieve}) => {
  return (
    <div className="achievement-card w-auto border-2 border-gray-800">
      <h1 className="font-bold text-xl my-2 text-grad">{achieve.title}</h1>
      {children}
      <p className='text-sm text-gray-300'
      >{achieve.detail}</p>
      {/* Control Buttons for Achievements */}
      <ControlBtns place="md:bottom-[-1%]" id={achieve._id} type={"achievement"} obj={achieve} fn={DeletingAchievements}/>
    </div>
  );
};


export default AchievementCard;