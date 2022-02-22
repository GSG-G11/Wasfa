const express = require('express');

const router = express.Router();

const { searchRecipe, recipePage } = require('../controllers');

router.get('/recipe', recipePage);

router.get('/searchRecipe', searchRecipe);

module.exports = router;
