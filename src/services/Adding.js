const API_BASE = import.meta.env.VITE_BACKEND_API;

const addItem = async (type, data) => {
  try {
    const res = await fetch(`${API_BASE}/api/add/${type}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
    const result = await res.json();
    return result;
    
  } catch (error) {
    console.error(error);
    return {
      message: `Failed to add ${type}!`,
      success: false,
    };
  }
}

export const AddingSkills = (data) =>
  addItem("skills", data);

export const AddingProjects = (data) =>
  addItem("projects", data);

export const AddingAchievements = (data) =>
  addItem("achievements", data);