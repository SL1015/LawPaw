// api.js
import axios from "axios";
export const sendMessageToAPI = async (message, language, canton, category) => {
  try {
    console.log(`Message: ${message}, Lang: ${language}, Canton: ${canton}, Cat: ${category} `);
  
    const response = await axios.post("http://127.0.0.1:5000/chatbot",
    {
      "message": `"${message}"`,
      "lang": `"${language}"`,
      "kanton": `"${canton}"`
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message to API:", error);
    throw error;
  }
};