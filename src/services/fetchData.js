const API_BASE = 
import.meta.env.VITE_BACKEND_API;

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${API_BASE}/api/fetch/projects`);
    
    const result = await res.json();
    return result;

  } catch (error) {
    console.error(error);
  }
};

export const fetchAchievements = async () => {
  try {
    const res = await fetch(`${API_BASE}/api/fetch/achievements`);
    
    const result = await res.json();
    return result;

  } catch (error) {
    console.error(error);
  }
};

export const fetchSkills = async ()=>{
  try {
    const res = await fetch(`${API_BASE}/api/fetch/skills`);
    const result = await res.json(); // Parse response to read 
    return result;
  } catch (error) {
    console.error(error);
  }
};
