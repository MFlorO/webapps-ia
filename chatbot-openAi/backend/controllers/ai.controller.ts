import { Request, Response } from 'express';
import { AIService } from '../services/ai.services';

export class AIController {
  
  static async orthographyCheck(req: Request, res: Response) {
    try {
      const result = await AIService.orthographyCheck(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
      res.status(500).json({
        error: error instanceof Error ? error.message : 'Error desconocido',
      });
    }
  }

  static async chatWithGemini(req: Request, res: Response) {
    try {
      const result = await AIService.chatWithGemini(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
      res.status(500).json({
        error: error instanceof Error ? error.message : 'Error desconocido',
      });
    }
  }

}