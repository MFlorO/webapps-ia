import { Router } from 'express';
const router = Router();
import { OpenAIController } from '../controllers/ai.controller';

router.post('/', OpenAIController.chatWithGemini);

module.exports = router;
