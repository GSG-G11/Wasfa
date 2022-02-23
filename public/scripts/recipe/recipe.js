/* eslint-disable operator-linebreak */
const select = (tag) => document.querySelector(tag);
const createEl = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};

const recipeCard = select('.ft-recipe');

const recipeTitle = select('.recipe-title');
const recipeImage = select('.ft-recipe__thumb img');
const recipeTimeNumber = select('.time .value');
const recipeIngredientsNumber = select('.ingredients .value');
const recipeServe = select('.servings .value');
const recipeDesc = select('.description');

const backCard = select('.back-card');
const ingredientsList = select('.ingredients-list');

const searchTerm = {
  searchTerm: 'burger',
};

const viewRecipeBtn = select('.viewRecipeBtn');
const flopCardBtn = select('.flip-card-btn');

viewRecipeBtn.addEventListener('click', () => {
  recipeCard.classList.add('flip-card');
  backCard.classList.add('back-card-visible');
});

flopCardBtn.addEventListener('click', () => {
  recipeCard.classList.remove('flip-card');
  backCard.classList.remove('back-card-visible');
});

// eslint-disable-next-line no-undef
fetchData('POST', 'http://localhost:3000/searchrecipe', searchTerm).then(({ hits }) => {
  const { recipe } = hits[1];

  recipeTitle.textContent = recipe.label;
  recipeImage.src = recipe.image;
  recipeTimeNumber.textContent = recipe.totalTime;
  recipeIngredientsNumber.textContent = recipe.ingredients.length;
  recipeServe.textContent = recipe.yield;
  recipeDesc.textContent =
    'There’s no better way to celebrate May being National Strawberry Month than by sharing a sweet treat with your pup!!! Strawberries...';
  recipe.ingredientLines.slice(0, 10).map((ing) => {
    const listItem = createEl('li', 'item', ing);
    return ingredientsList.append(listItem);
  });
});
