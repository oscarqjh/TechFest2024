import {loadImage} from 'canvas';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config()
const API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";

async function query(payload) {
    try {
        const authApiToken = process.env.HF_API_TOKEN;
        const authorization = "Bearer " + authApiToken;
        const headers = {"Authorization": authorization, "Content-Type": "application/json"};
        
        console.log("Querying model...")
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        });
        console.log("Querying model...")
        return await response.arrayBuffer();
    }
    catch (error) {
        console.error("Error querying model: ", error);
        return null;
    }
}

async function generateImage(dishName, descriptionOfDish) {
    try {
        const input = `Create a gourmet food picture for ${dishName},${descriptionOfDish},realistic dish`;
        const imageBytes = await query({
            "inputs": input
        });
        console.log("Image Generated")
        const image = await loadImage(imageBytes);
        
        return image;
    }
    catch (error) {
        console.error("Error generating image: ", error);
        return null;
    }
}

// Example usage:
console.log("Image Start")
console.log(process.env.HF_API_TOKEN)
const dishName = "Spaghetti Bolognese";
const descriptionOfDish = "A classic Italian pasta dish with rich tomato sauce and savory ground beef.";
const generatedImage = await generateImage(dishName, descriptionOfDish);
console.log(generatedImage); // Use the generated image as needed
