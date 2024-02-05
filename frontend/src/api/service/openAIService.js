import { OpenAIHttp } from "../common";

const getRecipe = (data) => {
  const prompt = [];
  prompt.push("Generate a recipe that incorpirates the follwoing details:");
  prompt.push(`[Ingredients: ${data.ingredients}]`);
  prompt.push(`[Meal Type: ${data.mealType}]`);
  prompt.push(`[Cuisine Preference: ${data.cuisine}]`);
  prompt.push(`[Cooking Time: ${data.cookingTime}]`);
  prompt.push(`[Complexity: ${data.complexity}]`);

  prompt.push(
    "Please provide a detailed recipe, incliding the steps for preparation and cooking. Only use the ingreidents provided."
  );
  prompt.push(
    "The recipe should highlight the fresh and vibrant falvors of the ingredients."
  );
  prompt.push(
    "Also givve the recipe a suitable name in its local language based on cuisine performance."
  );


  const finalData = {
    model: "gpt-3.5-turbo",
    messages:[
      {
        role: "system",
        content: prompt.join(" "),
      },
    ],
  };

  return OpenAIHttp.post("/chat/completions", finalData);
};

const askfrAIbot = (data) => {
  const finalData = {
    model: "gpt-3.5-turbo",
    messages: data.messages,
  }
  return OpenAIHttp.post("/chat/completions", finalData)
}

const OpenAIService = {
  getRecipe,
  askfrAIbot
};

export default OpenAIService;
