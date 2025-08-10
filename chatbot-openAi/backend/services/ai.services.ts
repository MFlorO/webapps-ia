const HttpError = require('../utils/errors');
const { OPENAI_API_KEY, GEMINI_API_KEY } = require('../env');
import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";  
import { chatWithGemini } from "../uses-case/chatWithGemini.uses-case";
// const { orthographyCheckUseCase } = require('../uses-case/orthography.uses-case');

export class AIService {

  private static gemini = new GoogleGenAI({
    apiKey: GEMINI_API_KEY
  });

  static async chatWithGemini({ prompt }: { prompt: string }) {
    try {
      const response = await chatWithGemini(this.gemini, { prompt });
      return response;
    } catch (error: any) {
      console.error("Error en chatWithGemini:", error);
      if (error instanceof HttpError) throw error;
      throw new HttpError(500, error.message);
    }
  }

  private static openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });

  static async orthographyCheck({ prompt }: { prompt: string }) {
    try {
      if (!prompt) {
        throw new HttpError(400, 'El campo prompt es obligatorio');
      }

      const completion = await this.openai.responses.create({
        model: "gpt-5",
        reasoning: { effort: "low" },
        input: [
            {
                role: "developer",
                content: "Talk like a pirate."
            },
            {
                role: "user",
                content: "Are semicolons optional in JavaScript?",
            },
        ],
      });

      // const completion = await this.openai.chat.completions.create({
      //   model: "gpt-3.5-turbo",
      //   messages: [
      //     { role: 'system', content: 'Eres un asistente útil.' },
      //     { role: 'user', content: prompt },
      //   ],
      //   temperature: 0.3,
      //   max_tokens: 500,
      // });
      
      console.log('response-service: ', completion, OPENAI_API_KEY)

      // return await orthographyCheckUseCase(this.openai, { prompt });
    } catch (error: any) {
      console.error('Error real de OpenAI:', error);
      if (error instanceof HttpError) throw error;
      if (error.status === 429) throw new HttpError(429, error.message);
      throw new HttpError(500, 'Error procesando la solicitud a OpenAI');
    }
  }

}
