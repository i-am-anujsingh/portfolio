import React, { useState } from "react";
import "../custom.css";
import { FaEye, FaEyeSlash} from "react-icons/fa";
import { Link, useNavigate} from "react-router-dom";
import { login } from '../services/authService'

export default function Login() {
  const navigate =useNavigate()
   
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name] : value.trim(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //WILL CALL LOGIN SERVICE
    try {
      const res = await login(formData);
      if(res.success){
        localStorage.setItem('token', res.token);
        navigate("/iadmin/adminpanel");
      }
      else{
        alert(res.message);
      }
    } catch (error) {
      console.error(`ERROR :: ${error}`);
    }
  
  };

  return (
    <div className="login-page flex justify-center items-center h-[100vh]">
      <container className="bg-transparent-blur p-[1px] border-2 border-white rounded-[20px]">
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="input-field">
              <input
              className="w-full"
                id="userId"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
  
            {/* Password */}
            <div className="input-field">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                className="mr-1"
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
              {
                showPassword ? <FaEye /> : <FaEyeSlash/>
              }
              </button>
            </div>
            {/* Submit */}
            <div className="w-full text-center">
              <button 
              className='mt-4 py-2 px-4 text-grad border-2 border-gray-100 rounded-full'
              type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </container>
    </div>
  );
}