import { OpenAI } from "langchain/llms/openai";

config();

/**
 * An instance of the OpenAI library.
 * @typedef {Object} OpenAI
 * @property {string} openAIApiKey - The API key for OpenAI.
 * @property {string} modelName - The name of the model to use.
 * @property {number} temperature - Determines the randomness of the model's output.
 * @property {number} maxTokens - The maximum number of tokens to generate.
 */

/**
 * @type {OpenAI}
 */
const llm = new OpenAI({
  /**
   * The API key for OpenAI.
   * @type {string}
   */
  openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,

  /**
   * The name of the model to use.
   * @type {string}
   */
  modelName: "gpt-3.5-turbo-1106",

  /**
   * Determines the randomness of the model's output.
   * @type {number}
   */
  temperature: 0.7,

  /**
   * The maximum number of tokens to generate.
   * @type {number}
   */
  maxTokens: 600,
});

export default llm;