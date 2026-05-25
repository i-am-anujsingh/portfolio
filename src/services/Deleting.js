const API_BASE = import.meta.env.VITE_BACKEND_API;
export const DeletingSkills = async (id)=>{
  try {
    alert('inside service file');
    const res=await fetch(`${API_BASE}/api/delete/skills/${id}`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, 
      }
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error deleting skill:', error);
    throw error;
  }
};