let numbersArray = [7, 15, 39, 55, 1, 48];

let firstDiv = document.getElementById("mainDiv").firstElementChild;
let secondP = document.getElementById("mainDiv").lastElementChild;

function arrayElements (array, element) {
    let sum = 0;
    element.innerHTML = "";
    element.innerHTML = element.innerHTML + "<ul>"
    for (i = 0; i < array.length; i++){
        sum = sum + array[i];
        element.innerHTML = element.innerHTML + `<li>${array[i]}</li>`;
    }
    element.innerHTML = element.innerHTML + "</ul>";
    return sum;
}

let changedFirstDiv = arrayElements (numbersArray, firstDiv);

secondP.innerHTML = `${numbersArray.join(" + ")} = ${changedFirstDiv}`;