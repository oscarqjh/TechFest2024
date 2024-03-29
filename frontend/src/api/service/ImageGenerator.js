import {ImgGenHttp} from  "../common.js";
import { Buffer } from 'buffer';

// Function to generate an image using the HF model, returning image link
async function generateImage(dishName, descriptionOfDish) {
    try {
        console.log("Image Start")
        const input = `Create a gourmet food picture for ${dishName},${descriptionOfDish},realistic dish`;
        const imageUrl = await query({
            "inputs": input
        });
        console.log("Image Generated")
        console.log(imageUrl)
        return imageUrl;
    }
    catch (error) {
        console.error("Error generating image: ", error);
        return null;
    }
}

// Post request to HF model to generate image, then convert the image bytes to a URL
async function query(payload) {
    try {
        console.log("Generating Image...")
        // Send a POST request to the model endpoint
        const response = await ImgGenHttp.post("/models/stabilityai/stable-diffusion-xl-base-1.0", payload)

        console.log("Image Generated")
        // Convert array buffer to image link
        const imageUrl = await imageBytesConverter(await response.data);
        
        return imageUrl;
    }
    catch (error) {
        console.error("Error querying model: ", error);
        return null;
    }
}

// Convert image bytes to a URL
const imageBytesConverter = async (imageBytes) => {
    console.log("Converting Image")
    // Convert image bytes to a Uint8Array
    const uint8Array = new Uint8Array(imageBytes);
    console.log(uint8Array)
    // Convert the Uint8Array to base64 (to display the image)
    const base64String = Buffer.from(uint8Array).toString('base64')
    // const base64String = btoa(String.fromCharCode.apply(null, uint8Array));

    console.log(base64String)
    // Create an image URL
    const dataUrl = `data:image/jpeg;base64,${base64String}`;

    // Store the image URL in local storage
    localStorage.setItem("generatedImage", dataUrl);

    return dataUrl;
}


export {generateImage};