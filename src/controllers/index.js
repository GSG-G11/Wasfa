const recipePage = require('./recipe');
const searchRecipe = require('./searchRecipe');
const handle404=require('./404')
const  handle500=require('./500')

module.exports = { searchRecipe, recipePage,handle404, handle500};
