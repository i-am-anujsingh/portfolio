import React from 'react';
import '../../custom.css';


const AchievementCard = ({children, achieve}) => {
  return (
    <div className="achievement-card w-auto">
      <h1 className="font-bold text-xl my-2 text-grad">{achieve.title}</h1>
      {children}
      <p className='text-sm text-gray-300 mt-3'
      >{achieve.detail}</p>
    </div>
  );
};


export default AchievementCard;