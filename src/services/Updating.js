const API_BASE = import.meta.env.VITE_BACKEND_API;

const updateItem = async (type, data) => {
  try {
    const res = await fetch(`${API_BASE}/api/update/${type}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, 
      },
      body: JSON.stringify(data),
    });

    const text = await res.json();
    return text;

  } catch (error) {
    throw error;
  }
};

export const UpdatingSkills = (data) =>
  updateItem("skills", data);

export const UpdatingProjects = (data) =>
  updateItem("projects", data);

export const UpdatingAchievements = (data) =>
  updateItem("achievements", data);