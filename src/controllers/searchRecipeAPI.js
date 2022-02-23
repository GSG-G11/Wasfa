const fetch = require('node-fetch');

const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;

const searchRecipe = (req, res) => {
  const { searchTerm } = req.body;

  if (!searchTerm) return res.send('<h3>Must provide a search term</h3>');

  return fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${appKey}`)
    .then((data) => data.json())
    .then((data) => res.json(data))
    .catch(() => res.status(500).json('<h3>something went wrong</h3>'));
};

module.exports = searchRecipe;
