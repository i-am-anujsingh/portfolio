const API_BASE = import.meta.env.VITE_BACKEND_API;
export const UpdatingSkills = async (data)=>{
  try {
    const res = await fetch(`${API_BASE}/api/update/skills`,{
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
    console.error('Error deleting skill:', error);
    throw error;
  }
};