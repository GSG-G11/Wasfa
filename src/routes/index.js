const express = require('express');

const router = express.Router();

const { homePage, recipePage } = require('../controllers');

router.get('/', homePage);

router.get('/searchRecipe', recipePage);

module.exports = router;
