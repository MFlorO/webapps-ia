import { Request, Response } from 'express';
import { OpenAIService } from '../services/open-ai.services';

export class OpenAIController {
  
  static async orthographyCheck(req: Request, res: Response) {
    const result = await OpenAIService.orthographyCheck(req.body);
    res.status(201).json(result);
  }


}