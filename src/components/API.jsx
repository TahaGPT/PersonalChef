import axios from "axios";

const YOUR_HF_TOKEN = "api key"; // Keep this secure!
const API_URL = "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1";

export async function callHuggingFaceAPI(ingredients) {
    const instruction = `
You are a professional chef assistant. Your task is to receive a list of ingredients and suggest a recipe that could be made using some or all of them. 
You may add 1-3 extra ingredients if necessary, but try to stick to the provided list. 

Format your recipe in **Markdown** with the following structure:
- **Recipe Name**
- **Ingredients**
- **Instructions**
  `;

  const inputText = `${instruction}\n\nThe user has the following ingredients:\n- ${ingredients.join(
    "\n- "
  )}`;

  try {
    const response = await axios.post(
      API_URL,
      { inputs: inputText },
      {
        headers: {
          Authorization: `Bearer ${YOUR_HF_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const output =
      response.data?.[0]?.generated_text || "No response from model.";
    return output;
  } catch (error) {
    console.error("API call failed:", error);
    return "Sorry, there was an error generating your recipe.";
  }
}
