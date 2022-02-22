const recipeAPI = require('./recipeAPI');
const searchRecipe = require('./searchRecipe');
const handle404 = require('./404');
const handle500 = require('./500');

const handleRecipePage = require('./recipePage');

module.exports = { searchRecipe, recipeAPI , handle404, handle500, handleRecipePage };
