// api.js
import axios from "axios";
export const sendMessageToAPI = async (message, language) => {
  try {
    const response = await axios.post("http://127.0.0.1:5000/chatbot",
    {
      "message": `"${message}"`,
      "lang": "en",
      "kanton": ""
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message to API:", error);
    throw error;
  }
};