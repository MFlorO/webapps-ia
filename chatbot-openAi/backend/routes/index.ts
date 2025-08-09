const express = require('express');
const router = express.Router();
const openAIRoutes = require('./open-ai.routes');

router.get('/', (req:any, res:any) => res.send('Bienvenido al backend de este proyecto!'));
router.use('/orthography', openAIRoutes);

module.exports = router;

