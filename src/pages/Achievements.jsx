import React, {useEffect, useState} from 'react';
import '../custom.css';
import AchievementCard from '../components/cards/AchievementCard';
import {fetchAchievements} from '../services/fetchData.js';
import Loader from '../components/Loader';

const Achievements = () => {
  const [data, setData]=useState([]);
  const [resp, setResp]=useState({message:"testing"});
  
  const handleData= async ()=>{
    try {
      const res = await fetchAchievements();
      if(res.success){
        setData(res.achievements);
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
    <section id="achievements">
      <div className="my-16">
        <h2>Achievements</h2>
      {data.length?
      <div className="achievement-container my-8">
        {
          data.map((achieve, index) =>(
            <AchievementCard achieve={achieve}>
              <img className="projimage" src={`${achieve.src}`}
              alt={achieve.title}/>
            </AchievementCard>
          ))
        }
      </div>:<Loader />
      }
      </div>
    </section>
  );
  
};

export default Achievements;