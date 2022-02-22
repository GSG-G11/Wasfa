const fetch = require('node-fetch');

const recipePage = (req, res) => {
  fetch('https://www.themealdb.com/api/json/v1/1/categoriess.php')
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => res.send(`<h3>somethig went wrong with request<h3>`));
};

module.exports = recipePage;
