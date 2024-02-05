import axios from "axios";
// import {fetch} from 'node-fetch';

const hfAPIKey = import.meta.env.VITE_HF_API_TOKEN;

const ImgGenHttp = axios.create({
    baseURL: "https://api-inference.huggingface.co",
    credentials: true,
    headers: {
        "Authorization": `Bearer ${hfAPIKey}`,
        "Content-Type": "application/json"
    },
    responseType: 'arraybuffer'
});

// const API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";
// const ImgGenFetch = fetch(API_URL,
//     credentials: true,
//     headers: {
//         "Authorization": `Bearer ${hfAPIKey}`,
//         "Content-Type": "application/json"
//     }
// });

export { ImgGenHttp }