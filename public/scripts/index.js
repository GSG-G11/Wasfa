const cardSection = document.querySelector('#FoodCards');
cardSection.textContent = '';
const renderRecipeCard = ele => {
  console.log(ele);

  const div = document.createElement('div');
  const divImg = document.createElement('div');
  const img = document.createElement('img');
  const divDecription = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const btn = document.createElement('button');
  div.className = 'FoodCard';

  img.id = 'recipeImg';
  img.src = ele.strCategoryThumb;
  divDecription.id = 'desciption';
  h1.textContent = ele.strCategory;
  btn.type = 'submit';
  btn.id = 'viewRecipeBtn';
  btn.innerText = 'View Recipe';

  p.textContent = ele.strCategoryDescription.slice(0, 105) + '...know more';
  cardSection.appendChild(div);
  div.appendChild(divImg);
  div.appendChild(divImg);

  div.appendChild(divDecription);

  divImg.appendChild(img);
  divDecription.appendChild(h1);
  divDecription.appendChild(p);
  divDecription.appendChild(btn);
  btn.addEventListener('click', () => {
    fetchData('post', '/searchrecipe', { searchTerm: ele.strCategory });
  });
};
