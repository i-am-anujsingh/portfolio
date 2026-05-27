const API_BASE = import.meta.env.VITE_BACKEND_API;

const deleteItem = async (type, id) => {

  try {

    const res = await fetch(
      `${API_BASE}/api/delete/${type}/${id}`,
      {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",

          Authorization:
            `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await res.json();
    return data;

  } catch (error) {
    throw error;
  }
};

export const DeletingSkills = (id) =>
  deleteItem("skills", id);

export const DeletingProjects = (id) =>
  deleteItem("projects", id);

export const DeletingAchievements = (id) =>
  deleteItem("achievements", id);