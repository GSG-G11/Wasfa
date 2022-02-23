window.onload = () => {
  fetchData('GET', '/recipe').then(data => getRecipeInfo(data.categories));
};
let getRecipeInfo = array => array.map(ele => renderRecipeCard(ele));
