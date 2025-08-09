import { Request, Response } from 'express';
import { OpenAIService } from '../services/open-ai.services';

export class OpenAIController {
  
  static async orthographyCheck(req: Request, res: Response) {
    try {
      const result = await OpenAIService.orthographyCheck(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
      res.status(500).json({
        error: error instanceof Error ? error.message : 'Error desconocido',
      });
    }
  }


}