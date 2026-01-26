import React,{ useState, useEffect} from 'react';
import '../custom.css'
import {AddingSkills, AddingAchievements, AddingProjects} from '../services/Adding'
import {fetchMsgs,deleteMsg} from '../services/Message'

const Addskills = () => {
  const [skillData,setSkillData] = useState({});
  const [skills,setSkills] = useState([]);
  const [res,setRes] = useState({
    message:'Sent Successfully!(test text)'
  });
  
  const handleSkillData=(e)=>{
    const {name, value} = e.target;
    setSkillData((prev)=>({
      ...prev,
      [name]:value,
    }));
  }
  
  const handleSkills=(e)=>{
    const {name, value} = e.target;
    var values = value.split(',');
    setSkills(values)
  }
  
  const handleSkillSubmit= async (skillData,skill)=>{
    try {
      const response = await AddingSkills({skillData,skill});
      setRes(response)
      setSkills(['']);
      setSkillData({
        area:'',
        detail:'',
      })
    } catch (error) {
      console.error(error);
    }
    finally{
      setRes(null)
    }
  }
  
  return (
    <section
    id='addskill'>
      <h2>Add New Skill </h2>
      { res.success || res.success== false?
            <div className="h-[15rem] w-[100%] md:w-[50%] md:mx-[3rem] left-0 absolute flex justify-center">
              <div className="h-[60%] w-[80%] bg-[#000011ed] m-auto rounded-2xl border-[#ccc] border-[1.5px] flex justify-center items-center p-2">
                <p className={`text-xl ${res.success? 'text-grad' : 'text-red-600'}`}>{res.message}</p>
              </div>
            </div> : null
            }
      <form 
      onSubmit={(e)=>{
        e.preventDefault();
        handleSkillSubmit(skillData,skills);
        setTimeout(()=>{
                setRes({});
        }, 3000);
      }}
      id='new-skill-form'
      className="w-[90%] mx-auto my-6 p-4 border-[1px] border-[#ccc] rounded text-center">
      
        <input
        disabled={res.success || res.success==false}
        onChange={handleSkillData}
        value={skillData.area}
        required
        name="area"
        placeholder='Area of the Skill'
        type='text'
        />
        
        <input
        disabled={res.success || res.success==false}
        onChange={handleSkills}
        value={skills}
        required
        name="skill"
        placeholder='Skills seperated by commas'
        type='text'
        />
        
        <textarea
        disabled={res.success || res.success==false}
        onChange={handleSkillData}
        value={skillData.detail}
        required
        name="detail"
        placeholder='Detail on the skills'
        />
        
        <div className="">
          <button 
          className="btn">
            Add to Skills
          </button>
        </div>
      </form>
    </section>
  );
};

const Addachievements=()=>{
  const [file, setFile]=useState(null);
  const [fileData, setFileData]=useState({});
  const [res,setRes] = useState({
    message:'Sent Successfully!(test text)'
  });
  
  const handleFileData=(e)=>{
    const {name, value} = e.target;
    setFileData((prev)=>({
      ...prev,
      [name]:value,
    }))
  };
  
  const handleAchievementAdd= async (fD,f)=>{
    try{
      const response = await AddingAchievements({fD,f});
      setRes(response)
    }catch (e) {
      setRes(e)
    }finally{
      setFileData({});
      setFile(null);
      setRes(null)
    }
  };
  
  return(
    <section id='addachievement'>
      <h2 >Add New Achievement</h2>
      { res.success || res.success== false?
            <div className="h-[15rem] w-[100%] md:w-[50%] md:mx-[3rem] left-0 absolute flex justify-center">
              <div className="h-[60%] w-[80%] bg-[#000011ed] m-auto rounded-2xl border-[#ccc] border-[1.5px] flex justify-center items-center p-2">
                <p className={`text-xl ${res.success? 'text-grad' : 'text-red-600'}`}>{res.message}</p>
              </div>
            </div> : null
            }
      <form 
      onSubmit={(e)=>{
        e.preventDefault();
        handleAchievementAdd(fileData, file)
        setTimeout(()=>{
                setRes({});
        }, 3000);
        e.target.reset()
      }}
      id='new-skill-form'
      className="w-[90%] mx-auto my-6 p-4 border-[1px] border-[#ccc] rounded text-center">
      
        <input
        disabled={res.success || res.success==false}
        onChange={handleFileData}
        value={fileData.title}
        required
        name="title"
        placeholder='Title'
        type='text'
        />
        
        <textarea 
        disabled={res.success || res.success==false}
        onChange={handleFileData}
        value={fileData.detail}
        required
        name="detail"
        placeholder='Detail on the Achievement'
        />
        
        <input
        className='text-white'
        name="src"
        type='file'
        onChange={(e)=>{
          setFile(e.target.files[0]);
        }}
        />
        
        <div className="">
          <button 
          className="btn">
            Add to Achievements
          </button>
        </div>
      </form>
    </section>
  );
}

const Addprojects=()=>{
  
  const [file, setFile]=useState(null);
  const [fileData, setFileData]=useState({});
  const [res,setRes] = useState({
    message:'Sent Successfully!(test text)'
  });
  
  const handleFileData=(e)=>{
    const {name, value} = e.target;
    setFileData((prev)=>({
      ...prev,
      [name]:value,
    }))
  };
  
  const handleProjectAdd= async (fD,f)=>{
    try{
      const response = await AddingProjects({fD,f});
      setRes(response)
    }catch (e) {
      setRes(e)
    }finally{
      setFileData({});
      setFile(null);
      setRes(null)
    }
  };
  
  return(
    <section 
    id='addproject'
    >
      <h2 >Add New Project</h2>
      { res.success || res.success== false?
        <div className="h-[15rem] w-[100%] md:w-[50%] md:mx-[3rem] left-0 absolute flex justify-center">
          <div className="h-[60%] w-[80%] bg-[#000011ed] m-auto rounded-2xl border-[#ccc] border-[1.5px] flex justify-center items-center p-2">
            <p className={`text-xl ${res.success? 'text-grad' : 'text-red-600'}`}>{res.message}</p>
          </div>
        </div> : null
      }
      <form 
      onSubmit={(e)=>{
        e.preventDefault();
        handleProjectAdd(fileData,file);
      }}
      id='new-skill-form'
      className="w-[90%] mx-auto my-6 p-4 border-[1px] border-[#ccc] rounded text-center">
        <input 
        name="title"
        placeholder='Title'
        onChange={handleFileData}
        />
        <input 
        name="role"
        placeholder='Role in the Project'
        onChange={handleFileData}
        />
        <input 
        name="technology"
        placeholder='Technology Used'
        onChange={handleFileData}
        />
        <textarea
        name="detail"
        placeholder='Detail on the Project'
        onChange={handleFileData}
        />
        <input
        className='text-white'
        name="src"
        type='file'
        onChange={(e)=>{
          setFile(e.target.files[0]);
        }}
        />
        <div className="">
          <button 
          className="btn">
            Add to Projects
          </button>
        </div>
      </form>
    </section>
  );
}

const AllMessages=()=>{
  const [messages, setMessages]= useState([]);
  
  const [msg,setMsg]=useState(null);
  
  const getAllMessages= async ()=>{
    try {
      const res = await fetchMsgs();
      const m= (res.messages).reverse();
      setMessages(m);
    } catch (error) {
      console.error(error);
    }
  }
  
  getAllMessages();
  
  useEffect(()=>{
    if(toggleMsg){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = '';
    }
  },);
  
  const [toggleMsg, setToggleMsg]=useState(false);
  return(
    <section 
    id='addproject'
    className="h-full">
      <h2 >All mesaages</h2>
      <div className="h-auto">
      { messages.length?
      <div className="h-[10rem] overflow-auto px-6">
        {(messages).map((m, i) =>(
          <button 
          className="w-full bg-transparent-blur my-2 py-2 text-center border-[1px] border-white"
          onClick={(e)=>{
            e.preventDefault();
            setMsg(m);
            setToggleMsg((p)=>!p);
          }}
          >{m.email}: {m.subject}
          </button>
          ))
        }
      </div>
        :<p className='text-white text-center'>No messages to show...</p>
      }
      </div>
      {toggleMsg?
      <div className="absolute w-full h-[100vh] bg-transparent-blur left-0 top-0 flex justify-center items-center">
        <div className="border-[1px] border-white bg-transparent-blur h-auto w-[80%]">
          <div className="w-full py-2 px-4 my-2 text-white text-end text-xl">
            <button
            onClick={(e)=>{
              e.preventDefault();
              setToggleMsg(false);
            }}>X</button>
          </div>
          <div className="text-white h-auto m-4 text-justify">
            {msg.message}
          </div>
          <div className="py-2 flex justify-around">
            <button 
            className="bg-red-500 text-white py-1 px-2 rounded-xl border-[1px] border-white"
            onClick={(e)=>{
              
              e.preventDefault();
              
              const a = prompt("Do you wanna delete this message? (type 'y' for yes)");
              
              if(a=='y'){
                deleteMsg(msg._id);
                setTimeout(()=>{
                  window.location.reload();
                }, 500);
              }
              
            }}
            >Delete</button>
            <a
            className="bg-blue-500 text-white py-1 px-2 rounded-xl border-[1px] border-white"
            href={`mailto:${msg.message}?subject=Reply To ${msg.subject}&to=${msg.email}`}>Mail</a>
          </div>
        </div>
      </div>:null
      }
    </section>
  );
}

const Admin=()=>{
  return(
    <div className="mt-14">
      <AllMessages/>
      <Addskills/>
      <Addachievements />
      <Addprojects />
    </div>
  )
}

export default Admin;