const express = require('express');

const router = express.Router();

const { searchRecipe, recipePage,handle404,handle500} = require('../controllers');
router.use(handle404)
router.use(handle500)
router.get('/recipe', recipePage);

router.get('/searchRecipe', searchRecipe);

module.exports = router;
