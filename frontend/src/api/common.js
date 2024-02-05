import axios from "axios";

const openaiAPIKey = import.meta.env.VITE_OPENAI_API_KEY;
const hfAPIKey = import.meta.env.VITE_HF_API_TOKEN;

// Service to call OpenAI API for ChatGPT response
const OpenAIHttp = axios.create({
  baseURL: "https://api.openai.com/v1/",
  credentials: true,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${openaiAPIKey}`,
  },
});

// Service to call HuggingFace API for Image Generation
const ImgGenHttp = axios.create({
  baseURL: "https://api-inference.huggingface.co",
  credentials: true,
  headers: {
    Authorization: `Bearer ${hfAPIKey}`,
    "Content-Type": "application/json",
  },
  responseType: "arraybuffer",
});

export { OpenAIHttp, ImgGenHttp };
