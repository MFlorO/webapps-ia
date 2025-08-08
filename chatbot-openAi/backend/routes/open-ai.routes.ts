import { Router } from 'express';
const router = Router();
import { OpenAIController } from '../controllers/open-ai.controller';
import { validate } from '../middleware/validate';
import { orthographyCheckSchema } from '../validators/open-ai.validator';

router.post('/', validate(orthographyCheckSchema), OpenAIController.orthographyCheck);

module.exports = router;
