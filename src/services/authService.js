const API_BASE = import.meta.env.BACKEND_API;

export const login = async (userData) => {
  try {
    const res=await fetch(`${API_BASE}/api/auth/login`,{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    
    const result = await res.json(); 
    
    return result;
    
  } catch (error) {
    console.error(error);
    return {
      message: "Failed to login!",
      success: false,
    };
  }
  
}

/* export const logout = async (userData)=>{
  try {
    const res = await axios.post(`${API_BASE}/auth/signup`,userData);
    return res.data;
  } catch (error) {
    console.error(error);
  }
} */