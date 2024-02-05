import axios from "axios";

const openaiAPIKey = import.meta.env.VITE_OPENAI_API_KEY;

const OpenAIHttp = axios.create({
  baseURL: "https://api.openai.com/v1/",
  credentials: true,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${openaiAPIKey}`,
  },
});

export { OpenAIHttp };
