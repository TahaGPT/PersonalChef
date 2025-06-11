export async function callRecipe(ingredients) {
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
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer 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 ",
          // "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
          // "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [
            {
              role: "user",
              content: inputText,
            },
          ],
        }),
      }
    );

    const output = await response.json();
    const data = output.choices?.[0]?.message?.content || "No recipe found.";
    return data;
  } catch (error) {
    console.error("API call failed:", error);
    return "Sorry, there was an error generating your recipe.";
  }
}
