import { Ollama } from "langchain/llms/ollama";

const callBotApi = async (input) => {
  const ollama = new Ollama({
    baseUrl: "http://89.217.241.28:11434/",
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

export default callBotApi;
