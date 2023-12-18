let changedh1 = document.querySelector("h3");
let changedDiv = document.querySelector("div");

let recipeName = prompt("Please enter the name of the recipe");
changedh1.innerHTML = `Today we are cooking ${recipeName}.`

let numberOfIngredients = parseInt(prompt("Enter the number of ingredients"));
while (isNaN(numberOfIngredients)) {
    numberOfIngredients = prompt("Enter a valid number");
}
console.log(numberOfIngredients);

function printIngredients (numberOfIngredients, element) {
let ingredients = [];
element.innerHTML = "";
let table = "";
table += "<table>";
table += "<tr>"
table += `<th> Total ingredients </th>`

for (let ingredient = 0; ingredient < (numberOfIngredients); ingredient++) {
    let ingredientName = prompt("Enter an ingredient");
    ingredients.push(ingredientName);
    
    table += `<tr><td>${ingredientName}</td></tr>`
}

table += "</tr>";
table += "</table>";
console.log(ingredients);
element.innerHTML = table;
return ingredients;
}
let test = printIngredients(numberOfIngredients, changedDiv);
console.log(test);