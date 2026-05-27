const API_BASE = import.meta.env.VITE_BACKEND_API;

const fetchItem = async (type) => {
  try {
    const res = await fetch(`${API_BASE}/api/fetch/${type}`);
    
    const result = await res.json();
    return result;

  } catch (error) {
    console.error(error);
  }
};

export const fetchSkills = (data) =>
  fetchItem("skills", data);

export const fetchProjects = (data) =>
  fetchItem("projects", data);

export const fetchAchievements = (data) =>
  fetchItem("achievements", data);
