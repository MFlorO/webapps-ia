import { Router } from 'express';
const router = Router();
import { AIController } from '../controllers/ai.controller';
import { validate } from '../middleware/validate';
import { orthographyCheckSchema } from '../validators/open-ai.validator';

router.post('/', validate(orthographyCheckSchema), AIController.orthographyCheck);

module.exports = router;
