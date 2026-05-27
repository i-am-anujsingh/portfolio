const API_BASE = import.meta.env.VITE_BACKEND_API;

export const sendMessage = async (data) => {
  try {
    const res = await fetch(`${API_BASE}/api/message/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      message: "Failed to send message!",
      success: false,
    };
  }
};

export const deleteMsg = async (id) => {
  try {
    const res = await fetch(`${API_BASE}/api/message/${id}`, {
      method: "DELETE",
    });
    
    return res;
  } catch (error) {
    alert(error);
  }
};

export const fetchMsgs = async ()=>{
  try {
    const res = await fetch(`${API_BASE}/api/message/getall`);
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
