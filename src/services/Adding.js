const API_BASE = import.meta.env.VITE_BACKEND_API;
export const AddingSkills= async (data)=>{
  try {
    const res=await fetch(`${API_BASE}/api/add/skills`,{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
    const result = await res.json(); // Parse response to read 
    return result;
    
  } catch (error) {
    console.error(error);
    return {
      message: "Failed to add skills!",
      success: false,
    };
  }
}

export const AddingAchievements = async (data) => {
  try {    
    const res = await fetch(`${API_BASE}/api/add/achievements`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;

  } catch (error) {
    console.log(error);
    return {
      message: "Failed to upload!",
      success: false,
    };
  }
};

export const AddingProjects = async (data) => {
  try {    
    const res = await fetch(`${API_BASE}/api/add/projects`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;

  } catch (error) {
    console.log(error);
    return {
      message: "Failed to upload!",
      success: false,
    };
  }
};
