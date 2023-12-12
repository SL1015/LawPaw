import axios from "axios";
export const sendMessageToAPI = async (message, language, canton, category) => {
  try {
    let categoryFilter = "";
    if (category === "1" || category === "2" || category === "3" || category === "6") {
      categoryFilter = "OR";
    } else if (category === "4" || category === "5") {
      categoryFilter = "ZGB";
    }

    let languageFilter = "";
    if(language === "en") {
      languageFilter = "EN-GB"
    } else if (language === "de") {
      languageFilter = "DE"
    } else if (language === "fr") {
      languageFilter = "FR"
    }

    console.log(`Message: ${message}, Lang: ${languageFilter}, Canton: ${canton}, Cat: ${category}, Law: ${categoryFilter} `);
  
    const response = await axios.post("http://localhost:5000/chatbot",
    {
      "message": message,
      "lang": languageFilter,
      "kanton": canton,
      "law": categoryFilter
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message to API:", error);
    throw error;
  }
};