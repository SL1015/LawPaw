import axios from "axios";
export const sendMessageToAPI = async (message, language, canton, category) => {
  try {
    let categoryFilter = "";
    if (category === "1" || category === "2" || category === "3" || category === "6") {
      categoryFilter = "OR";
    } else if (category === "4" || category === "5") {
      categoryFilter = "ZGB";
    }
    // console.log(`Message: ${message}, Lang: ${language}, Canton: ${canton}, Cat: ${category}, Law: ${categoryFilter} `);
  
    const response = await axios.post("http://127.0.0.1:5000/chatbot",
    {
      "message": `"${message}"`,
      "lang": `"${language}"`,
      "kanton": `"${canton}"`,
      "law": `"${categoryFilter}"`
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message to API:", error);
    throw error;
  }
};