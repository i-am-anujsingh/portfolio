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
    className="bg-[#001] text-[#888] border-t-[1px] border-gray-400 h-auto w-full">
      <div className="my-8">
        <h2 className='text-center text-4xl font-extrabold'>Contact Us</h2>
        <div className="md:flex m-4 gap-2">
          <div className="message-box">
            <h3 className="text-2xl text-center">
              Get In Touch
            </h3>
            { res.success || res.success== false?
            <div className="h-[15rem] w-[100%] md:w-[50%] md:mx-[3rem] left-0 absolute flex justify-center">
              <div className="h-[60%] w-[80%] bg-[#000011ed] m-auto rounded-2xl border-[#ccc] border-[1.5px] flex justify-center items-center p-2">
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
        className="flex m-4 py-4 justify-around text-3xl">
            <a href="https://www.instagram.com/i.am.anujsingh/profilecard/?igsh=bGIxNGd4MzhiMHE2"><i className="fa-brands fa-instagram text-grad"></i></a>
            <a href="https://www.linkedin.com/in/anuj-singh-3b8553322"><i className="fa-brands fa-linkedin text-grad"></i></a>
            <a href="https://github.com/i-am-anujsingh"><i className="fa-brands fa-github text-grad"></i></a>
            <a href="https://x.com/i_am__anujsingh?t=D8Vodkr3SYH2YB02WeaXbQ&s=09"><i className="fa-brands fa-x-twitter text-grad"></i></a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;