const express = require('express');

const router = express.Router();

const { searchRecipe, recipePage, handleRecipePage } = require('../controllers');

router.get('/recipe', recipePage);

router.route('/search-?recipe').post(searchRecipe).get(handleRecipePage);

module.exports = router;
