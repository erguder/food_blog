var allRecipes;

function loadRecipes() {
    fetch('recipes.json')
        .then(response => response.json())
        .then(data => {
            allRecipes = data.foodArray;
            makeCards(allRecipes);
        })
        .catch(error => {
            console.error('Error loading recipes:', error);
        });
}
loadRecipes();

document.getElementById('soupBtn').addEventListener('click', function () {
    filterAndDisplayRecipes('Soup');
});
document.getElementById('appetizerBtn').addEventListener('click', function () {
    filterAndDisplayRecipes('Appetizer');
});
document.getElementById('mainDishBtn').addEventListener('click', function () {
    filterAndDisplayRecipes('Main Dish');
});
document.getElementById('sideDishBtn').addEventListener('click', function () {
    filterAndDisplayRecipes('Side Dish');
});
document.getElementById('dessertBtn').addEventListener('click', function () {
    filterAndDisplayRecipes('Dessert');
});
document.getElementById('drinkBtn').addEventListener('click', function () {
    filterAndDisplayRecipes('Drink');
});
document.getElementById('allRecipesBtn').addEventListener('click', function () {
    displayAllRecipes();
});
function displayAllRecipes() {
    makeCards(allRecipes);
}

document.getElementById('recipeOfMonth').addEventListener('click', function () {
    displayRecipeOfMonth();
});

function displayRecipeOfMonth() {
    
    const recipeOfMonth = allRecipes[13];

    displayRecipeDetails(recipeOfMonth);
}

function filterAndDisplayRecipes(category) {
    const filteredRecipes = allRecipes.filter(recipe => recipe.category === category);
    makeCards(filteredRecipes);
}


document.querySelectorAll('.fa-regular').forEach(function(element){
    element.addEventListener('mouseover', function() {
        this.classList.remove("fa-regular");
        this.classList.add("fa-solid");
    });
    element.addEventListener('mouseout', function(){
    this.classList.remove("fa-solid");
    this.classList.add("fa-regular");
    });
});

function makeCards(recipes) {
    const cardBox = document.querySelector(".cards");
    cardBox.innerHTML = ''; // Clear previous cards

    recipes.forEach(item => {
        const card = document.createElement("div");

        card.classList.add("box", "card", "col-lg-3", "col-md-4", "col-sm-6", "mb-4");

        card.innerHTML = `
            <img src="images/${item.image}" class="card-img-top" alt="${item.name}">
            
            <div class="card-body">
                <h4 class="card-title">${item.name}</h4>
                <h5 class="card-title">${item.origin}</h5>
            </div>
        `;

        card.addEventListener('click', function () {
            displayRecipeDetails(item);
        });

        cardBox.appendChild(card);
    });
}

function displayRecipeDetails(item) {
    const modal = document.getElementById('recipeModal');
    const detailsContainer = document.getElementById('recipeDetails');

    detailsContainer.innerHTML = '';

    const detailsHTML = `
      <img src="images/${item.image}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p><strong>Origin:</strong> ${item.origin}</p>
      <p><strong>Ingredients:</strong> ${item.ingredients}</p>
      <p><strong>Recipe:</strong> ${item.recipe}</p>
      <p><strong>Category:</strong> ${item.category}</p>
    `;

    detailsContainer.innerHTML = detailsHTML;

    modal.style.display = 'block';
  }

  function closeModal() {
    const modal = document.getElementById('recipeModal');
    modal.style.display = 'none';
  }