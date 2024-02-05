const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/recipeStream", (req, res) =>  {
    const ingredients = req.query.ingredients;
    const mealType = req.query.mealType;
    const cuisine = req.query.cuisine;
    const cookingTime = req.query.cookingTime;
    const complexity = req.query.complexity;

    res.setHeader("Content-Type", "text/event0-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const sendEvent = (chunk) => {

        let chunkResponse;
        if (chunk.choices[0].finish_reason === "stop") {
            res.write(`data: ${JSON.stringify({ action: "close" })}\n\n`);
        }else{
            if (
                chunk.choices[0].delta.role &&
                chunk.choices[0].delta.role === "assistant"
            ) {
                chunkResponse = {
                    action: "start",
                };
            } else {
                chunkResponse = {
                    action: "chunk",
                    chunk: chunk.choices[0].delta.content,
                };
            }
            res.write(`data: ${JSON.stringify({ action: "close" })}\n\n`);
        }
    };

    
    const prompt = [];
    prompt.push("Generate a recipe that incorpirates the follwoing details:");
    prompt.push(`[Ingredients: ${ingredients}]`);
    prompt.push(`[Meal Type: ${mealType}]`);
    prompt.push(`[Cuisine Preference: ${cuisine}]`);
    prompt.push(`[Cooking Time: ${cookingTime}]`);
    prompt.push(`[Complexity: ${complexity}]`);

    prompt.push("Please provide a detailed recipe, incliding the steps for preparation and cooking. Only use the ingreidents provided.");
    prompt.push("The recipe should highlight the fresh and vibrant falvors of the ingredients.")
    prompt.push("Also givve the recipe a suitable name in its local language based on cuisine performance.")

    const messages = [
        {
            role: "system",
            content: prompt.join(" "),
        },
    ];

    fetchOpenAICompletionStream(messages, sendEvent);

    req.on("close", () => {
        res.end();
    });
});

async function fetchOpenAICompletionStream(messages, callback){
    const OPEN_API_KEY = "";
    const openai = new OpenAI({ apiKey: OPEN_API_KEY });
    const aiModel = "gpt-3.5-turbo"

    try{
        const completion = openai.chat.completions.create({
            model: aiModel,
            messages: messages,
            stream: true,
        })

        for await (const chunk of completion){
            callback(chunk);
        }
    }catch(error){

    }
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});