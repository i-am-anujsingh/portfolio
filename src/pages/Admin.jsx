import React,{ useState, useEffect} from 'react';
import '../custom.css'
import {AddingSkills, AddingAchievements, AddingProjects} from '../services/Adding'
import { UpdatingSkills, UpdatingProjects, UpdatingAchievements } from '../services/Updating'
import {fetchMsgs,deleteMsg} from '../services/Message'

const Addskills = () => {

  const skillUpdate = JSON.parse(localStorage.getItem("skillUpdate"));
  const [skillData,setSkillData] = useState({});
  const [skills,setSkills] = useState([]);
  const [res,setRes] = useState({
    message:'Sent Successfully!(test text)'
  });
  const [update,setUpdate] = useState(false);

  setTimeout(()=>{
    if(skillUpdate){
      setSkillData({
        area: skillUpdate.area,
        detail: skillUpdate.detail,
        id: skillUpdate._id,
      });
      setSkills(skillUpdate.skills);
      setUpdate(true);
      localStorage.removeItem("skillUpdate");
    }
  }, 300);

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
      const response = update ? await UpdatingSkills({skillData,skill}) : await AddingSkills({skillData,skill});
      setRes(response)
      setUpdate(false);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally{
      setSkills([]);
      setSkillData({});
    }
  }
  
  return (
    <section
    id='addskill'>
      <h2>Add New Skill </h2>
      { res.success || res.success== false ?
            <div className="h-[15rem] w-[100%] md:w-[100%] md:mx-[3rem] left-0 absolute flex justify-center items-center">
              <div className="h-[60%] w-[60%] bg-[#000011ed] m-auto rounded-2xl border-[#ccc] border-[1.5px] flex justify-center items-center p-4">
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
          setShowRes(false);
          window.location.reload();
        }, 3000);
      }}
      id='admin-form'
      className="w-full mx-auto my-6 p-4 border border-[#ccc] rounded text-center">
      
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
        
        <div>
          <button 
          className="btn">
            {update ? 'Update Skills' : 'Add to Skills'}
          </button>
        </div>
      </form>
    </section>
  );
};

const Addachievements=()=>{

  const achievementUpdate = JSON.parse(localStorage.getItem("achievementUpdate"));
  const [fileData, setFileData]=useState({});
  const [res,setRes] = useState({
    message:'Sent Successfully!(test text)'
  });

  const [update,setUpdate] = useState(false);

    setTimeout(()=>{
    if(achievementUpdate){
      setFileData({
        title: achievementUpdate.title,
        detail: achievementUpdate.detail,
        id: achievementUpdate._id,
        src: achievementUpdate.src,
      });
      setUpdate(true);
      localStorage.removeItem("achievementUpdate");
    }
  }, 300);
  
  const handleFileData=(e)=>{
    const {name, value} = e.target;
    setFileData((prev)=>({
      ...prev,
      [name]:value,
    }))
  };
  
  const handleAchievementAdd = async (fD)=>{
    try{
      const response = update? await UpdatingAchievements(fD) : await AddingAchievements(fD);
      setRes(response)
    }catch (e) {
      setRes(e)
    }finally{
      setFileData({});
    }
  };
  
  return(
    <section id='addachievement'>
      <h2 >Add New Achievement</h2>
      { res.success || res.success == false ?
            <div className="h-[15rem] w-[100%] md:w-[100%] md:mx-[3rem] left-0 absolute flex justify-center items-center">
              <div className="h-[60%] w-[60%] bg-[#000011ed] m-auto rounded-2xl border-[#ccc] border-[1.5px] flex justify-center items-center p-4">
                <p className={`text-xl ${res.success? 'text-grad' : 'text-red-600'}`}>{res.message}</p>
              </div>
            </div> : null
            }
      <form 
      onSubmit={(e)=>{
        e.preventDefault();
        handleAchievementAdd(fileData)
        setTimeout(()=>{
          setRes({});
          window.location.reload();
        }, 3000);
        e.target.reset()
      }}
      id='admin-form'
      className="w-full mx-auto my-6 p-4 border-[1px] border-[#ccc] rounded text-center">
      
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
        placeholder='Source URL ID from Google Drive'
        type='text'
        disabled={res.success || res.success==false}
        onChange={handleFileData}
        value={fileData.src}
        />
        
        <div className="">
          <button 
          className="btn">
            {update ? 'Update Achievement' : 'Add to Achievements'}
          </button>
        </div>
      </form>
    </section>
  );
}

const Addprojects=()=>{

  const projectUpdate = JSON.parse(localStorage.getItem("projectUpdate"));
  const [fileData, setFileData]=useState({});
  const [res,setRes] = useState({
    message:'Sent Successfully!(test text)'
  });

  const [update,setUpdate] = useState(false);

  setTimeout(()=>{
    if(projectUpdate){
      setFileData({
        title: projectUpdate.title,
        detail: projectUpdate.detail,
        id: projectUpdate._id,
        role: projectUpdate.role,
        technology: projectUpdate.technology,
        src: projectUpdate.src,
        repo: projectUpdate.repo,
        weblink: projectUpdate.weblink,
      });
      setUpdate(true);
      localStorage.removeItem("projectUpdate");
    }
  }, 300);
  
  const handleFileData=(e)=>{
    const {name, value} = e.target;
    setFileData((prev)=>({
      ...prev,
      [name]:value,
    }))
  };
  
  const handleProjectAdd= async (fD)=>{
    try{
      const response = update? await UpdatingProjects(fD) : await AddingProjects(fD);
      setRes(response)
    }catch (e) {
      setRes(e)
    }finally{
      setFileData({});
    }
  };
  
  return(
    <section 
    id='addproject'
    >
      <h2 >Add New Project</h2>
      { res.success || res.success == false ?
        <div className="h-[20rem] w-[100%] md:w-[100%] md:mx-[3rem] left-0 absolute flex justify-center items-center">
          <div className="h-[60%] w-[60%] bg-[#000011ed] m-auto rounded-2xl border-[#ccc] border-[1.5px] flex justify-center items-center p-4">
            <p className={`text-xl ${res.success? 'text-grad' : 'text-red-600'}`}>{res.message}</p>
          </div>
        </div> : null
      }
      <form 
      onSubmit={(e)=>{
        e.preventDefault();
        handleProjectAdd(fileData);
        setTimeout(()=>{
          setRes({});
          window.location.reload();
        }, 3000);
        e.target.reset()
      }}
      id='admin-form'
      className="w-full mx-auto my-6 p-4 border-[1px] border-[#ccc] rounded text-center">
        <input 
        name="title"
        placeholder='Title'
        onChange={handleFileData}
        value={fileData.title}
        required
        />

        <input 
        name="role"
        placeholder='Role in the Project'
        onChange={handleFileData}
        value={fileData.role}
        required
        />

        <input 
        name="technology"
        placeholder='Technology Used'
        onChange={handleFileData}
        value={fileData.technology}
        required
        />

        <textarea
        name="detail"
        placeholder='Detail on the Project'
        onChange={handleFileData}
        value={fileData.detail}
        required
        />

        <input
        className='text-white'
        name="src"
        placeholder='Source URL ID from Google Drive'
        type='text'
        onChange={handleFileData}
        value={fileData.src}
        />

        <input
        className='text-white'
        name="repo"
        placeholder='GitHub Repo Link'
        type='text'
        onChange={handleFileData}
        value={fileData.repo}
        />

        <input
        className='text-white'
        name="weblink"
        placeholder='Live Weblink'
        type='text'
        onChange={handleFileData}
        value={fileData.weblink}
        />

        <div className="">
          <button 
          className="btn">
            {update? "Update Project" : "Add to Projects"}
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
      <div className="h-[auto] overflow-auto px-6">
        {(messages).map((m, i) =>(
          <button 
          className="w-full bg-transparent-blur text-center border-[1px] border-white"
          style={{padding: '4px'}, {margin:"10px 0"}}
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
        <div className="border-[1px] border-white bg-transparent-blur h-auto w-[80%]"
        style={{padding: '1rem'}}
        >
          <div className="w-full p-4 m-2 text-white text-end">
            <button
            onClick={(e)=>{
              e.preventDefault();
              setToggleMsg(false);
            }}>X</button>
          </div>
          <div className="text-white h-auto text-justify bg-transparent-blur"
          style={{margin: '1rem'}}
          >
            {msg.message}
          </div>
          <div className="p-4 m-2 flex justify-around">
            <button 
            className="bg-red-600 text-white rounded border border-white"
            style={{padding: '4px 16px'}}
            onClick={(e)=>{
              e.preventDefault();
              const a = confirm("Do you wanna delete this message?");
              if(a){
                deleteMsg(msg._id);
                setTimeout(()=>{ window.location.reload(); }, 500);
              }
            }}
            >Delete</button>
            <a
            className="bg-blue-700 text-white rounded border border-white"
            style={{padding: '4px 16px'}}
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