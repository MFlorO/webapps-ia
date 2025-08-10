require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY, //https://platform.openai.com/api-keys
  GEMINI_API_KEY: process.env.GEMINI_API_KEY //https://aistudio.google.com/app/apikey
};
