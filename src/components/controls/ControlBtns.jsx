import React from 'react';
import '../../custom.css';
import { useNavigate} from "react-router-dom";

export const ControlBtns = ({id, type, obj, fn, place}) => {
  const navigate = useNavigate();
  const admin = localStorage.getItem('token'); 
    return (
        <div className={`controls w-auto h-full m-0 p-0 ${place}`}>
            {admin &&
                <div className='w-full h-full m-0 p-0 flex gap-2'>
                <button
                onClick={
                    (e)=>{
                        e.preventDefault();
                        switch(type){
                            case "skill":
                                localStorage.setItem("skillUpdate",JSON.stringify(obj));
                                navigate("/iadmin/adminpanel/#addskill");
                                break;
                            case "project":
                                localStorage.setItem("projectUpdate",JSON.stringify(obj));
                                navigate("/iadmin/adminpanel/#addproject");
                                break;
                            case "achievement":
                                localStorage.setItem("achievementUpdate",JSON.stringify(obj));
                                navigate("/iadmin/adminpanel/#addachievement");
                                break;
                            default:
                                navigate("/");
                        }
                    }
                }
                className='w-full h-full bg-blue-500 rounded-lg'
                >Update</button>
                <button
                onClick={
                    async(e)=>{
                        e.preventDefault();
                        confirm(`Are you sure you want to delete this ${type}?`) && await fn(id);
                    }
                }
                className='w-full h-full bg-red-500 rounded-lg'
                >Delete</button>
                </div>
            }
        </div>
    );
}