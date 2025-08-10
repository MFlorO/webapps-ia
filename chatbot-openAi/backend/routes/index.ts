const express = require('express');
const router = express.Router();
const openAIRoutes = require('./open-ai.routes');
const geminiAIRoutes = require('./gemini.routes');

router.get('/', (req:any, res:any) => res.send('Bienvenido al backend de este proyecto!'));
router.use('/orthography', openAIRoutes);
router.use('/chatbot', geminiAIRoutes);

module.exports = router;

