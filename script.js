var foodArray;
function loadRecipes() {
    fetch('recipes.json')
    .then(response => response.json())
    
    .then(data => {
    foodArray = data.foodArray;

        makeCards(); //Call this here to make sure all the data is called before
    })
    .catch(error => {
        console.error('Error loading recipes:', error);
    });
}
loadRecipes();


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

function makeCards() {
    const cardBox = document.querySelector(".cards");
    foodArray.forEach(item => {
        const card = document.createElement("div");

        card.classList.add("box", "card", "col-lg-3", "col-md-4", "col-sm-6", "mb-4");

                card.innerHTML = `
                        <img src="images/${item.image}" class="card-img-top" alt="${item.name}">
                        
                        <div class="card-body">
                            <h4 class="card-title">${item.name}</h4>
                            <h5 class="card-title">${item.origin}</h5>
                        </div>
                `;

        cardBox.appendChild(card);
    });
}
