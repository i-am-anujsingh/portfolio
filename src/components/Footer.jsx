import React,{ useState } from 'react';
import {sendMessage} from '../services/Message'
import '../custom.css'

const Footer = () => {
  const [message,setMessage] = useState({});
  const [res,setRes] = useState({
    message:'Sent Successfully!(test text)'
  });
  const handleMessaging=(e)=>{
    const {name,value}=e.target;
    setMessage((prev)=>({
      ...prev,
      [name]:value,
    }))
  };
  
  const saveMessage = async (data)=>{
    try {
       const response =await sendMessage(data);
       setRes(response)
       setMessage({
         name:'',
         email:'',
         subject:'',
         message:'',
       })
    } catch (error) {
      console.error(error);
    }
  }

  
  return (
    <footer
    id='contact'
    className="bg-[#001] text-[#888] border-t border-gray-400 h-auto w-full">
      <hr className='w-full h-[1rem]' />
      <div className="m-12 md:flex">
        <div className="md:flex md:w-full m-4 gap-2">
          <div className="message-box">
            <h3 className="text-2xl text-center my-2">
              Get In Touch
            </h3>
            { res.success || res.success== false ?
            <div className="h-60 w-full md:w-[80%] md:mx-12 left-0 absolute flex justify-center items-center">
              <div className="h-[60%] w-[60%] bg-[#000011ed] m-auto rounded-2xl border-[#ccc] border-[1.5px] flex justify-center items-center p-4">
                <p className={`text-xl text-center ${res.success? 'text-grad' : 'text-red-600'}`}>{res.message}</p>
              </div>
            </div> : null
            }
            <form 
            onSubmit={(e)=>{
              e.preventDefault();
              saveMessage(message);
              setTimeout(()=>{
                setRes({});
              }, 3000);
            }}
            className={`message-form transition-all ${res.success? 'opacity-25': ''}`}>
            
                <input
                disabled={res.success || res.success==false}
                onChange={handleMessaging}
                required
                placeholder='Name'
                name='name'
                value={message.name}
                type='text'
                className="w-full">
                </input>
                
                <input
                disabled={res.success || res.success==false}
                onChange={handleMessaging}
                required
                placeholder='Email'
                name='email'
                type='email'
                value={message.email}
                className="w-full">
                </input>
                
                <input
                disabled={res.success || res.success==false}
                onChange={handleMessaging}
                required
                placeholder='Subject'
                name='subject'
                type='text'
                value={message.subject}
                className="w-full">
                </input>
                
                <textarea
                disabled={res.success || res.success==false}
                onChange={handleMessaging}
                required
                placeholder='Type Message'
                name='message'
                value={message.message}
                className="w-full">
                </textarea>
                
                <div className="message-btn-box">
                  <button
                  disabled={res.success || res.success==false}
                  className='btn'
                  > Send Message </button>
                </div>
                
            </form>
          </div>
        </div>
        <div 
        id="social-media-links"
        className="flex md:block md:w-auto justify-around text-3xl">
            <a className='block' href="https://www.instagram.com/i.am.anujsingh/profilecard/?igsh=bGIxNGd4MzhiMHE2"><i className="fa-brands fa-instagram text-grad"></i><span className='hidden md:inline'> INSTAGRAM</span></a>
            <a className='block' href="https://www.linkedin.com/in/anuj-singh-3b8553322"><i className="fa-brands fa-linkedin text-grad"></i><span className='hidden md:inline'> LINKEDIN</span></a>
            <a className='block' href="https://github.com/i-am-anujsingh"><i className="fa-brands fa-github text-grad"></i><span className='hidden md:inline'> GITHUB</span></a>
            <a className='block' href="mailto:ianujsingh.1801@gmail.com"><i className="fa-brands fa-at text-grad"></i><span className='hidden md:inline'> EMAIL</span></a>
        </div>
      </div>
      <div className='text-center' style={{padding:"10px 0"}, {fontWeight: "bold"}}>&copy; {new Date().getFullYear()} Anuj Singh – All Rights Reserved.</div>
    </footer>
  );
};


export default Footer;