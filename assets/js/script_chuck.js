//find the object with the name element and store it. 
var generate = document.getElementById('generate');
var joke = document.getElementById('joke');
var mealEl = document.getElementById('meal');
var resultHeading = document.getElementById('result-heading');


function getAPI() {
  var requestUrl = 'https://api.chucknorris.io/jokes/random';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      joke.textContent = (JSON.stringify(data.value))
    });

}

//Function that pulls the search parameters
function getParams() {
  var serchParamArr = document.location.search.split('=');

  var mealID = serchParamArr[1];

  getMeal(mealID);
}

//fucntion that calls themeal api
function getMeal(mealID) {
  fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealID)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const meal = data.meals[0];

      showMeal(meal);
    });
}

//funtion to insert data into html
function showMeal(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    } else {
      break;
    }
  }

  mealEl.innerHTML = `
      <div class="meal">
          <h1>${meal.strMeal}</h1>
          <div class="meal-info">
          ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
          ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
          </div>

          <div class="main">
            <div class="column">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" id="image" /></div>
            <div class="column">
          <h3>Ingredients</h3>
          <ul>
            ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
          </ul></div>
          </div>

        <div class="recipe">
              <p>${meal.strInstructions}</p>
        </div>
      </div>
  `;
}


//attaching eventlistener to the element, so when it's clicked on it will call the function, which is 
generate.addEventListener("click", getAPI);


getParams();

