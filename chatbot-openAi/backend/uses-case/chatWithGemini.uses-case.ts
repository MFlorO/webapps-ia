import { GoogleGenAI } from "@google/genai";

interface Options {
  prompt: string;
}

export const chatWithGemini = async (gemini: GoogleGenAI, options: Options) => {

  const { prompt } = options;

  const completion = await gemini.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = completion?.text;
  if (!text) {
    throw new Error("No se recibió contenido de Gemini");
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
};
