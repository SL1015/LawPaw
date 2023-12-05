// import { Ollama } from "langchain/llms/ollama";

// const callBotApi = async (input) => {
//   const ollama = new Ollama({
//     baseUrl: "http://localhost:11434/",
//     model: "mistral",
//   });

//   try {
//     const response = await ollama.call(input);
//     return response;
//   } catch (error) {
//     console.error("Error calling bot API:", error);
//     throw error;
//   }
// };

// export default callBotApi;
const { Ollama } = require("langchain/llms/ollama");

const handleBotRequest = async (input) => {
  const ollama = new Ollama({
    baseUrl: "http://localhost:11434/",
    model: "mistral",
  });

  try {
    const response = await ollama.call(input);
    return response;
  } catch (error) {
    console.error("Error calling bot API:", error);
    throw error;
  }
};

module.exports = {
  handleBotRequest
};