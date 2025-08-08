const HttpError = require('../utils');
const { OPENAI_API_KEY } = require('../backend/env');
import { OpenAI } from 'openai';
import { orthographyCheckUseCase } from '../uses-case/orthography.uses-case';

export class OpenAIService {
  private static openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });

  static async orthographyCheck(orthographyDto: { prompt: string; maxTokens?: number }) {
    return await orthographyCheckUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }
}
