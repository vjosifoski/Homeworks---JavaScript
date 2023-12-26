let container = document.getElementById("main");
let clearButton = document.getElementById("clearBtn");
let numOfExcercises = document.getElementById("numOfExcercises");
let submitButton = document.getElementById("sbmBtnForNumOfEx");

container.style.backgroundColor = "lightblue";
container.style.padding = "20px";
container.style.border = "1px solid black";

clearButton.style.backgroundColor = "red";
clearButton.style.color = "white";
clearButton.style.border = "none";
clearButton.style.padding = "10px 20px";
clearButton.style.margin = "5px";

submitButton.style.backgroundColor = "green";
submitButton.style.color = "white";
submitButton.style.border = "none";
submitButton.style.padding = "10px 20px";
submitButton.style.margin = "5px";

numOfExcercises.style.padding = "10px";
numOfExcercises.style.border = "1px solid gray";

let vezbi = {
  vezba1:
    "Declare and initialize a variables of every type that we learned so far. Print each of them in a console or alert()!",
  vezba2:
    "Read 5 variables as user input and then print each of the variable types in the console.",
  vezba3:
    "Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.Make sure you use a function! Ex. Input: 20 ==> Output: 14",
  vezba4:
    "Write a JavaScript program that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted!Make sure you use a function!Ex. Input1: 20Input2: 80Output: 80 is closer to 100",
  vezba5:
    "Bob's salary is 1000 eur per month. He has expenses that has to cover during the month. He has to pay rent for his apartment 375 eur. He should pay 250 eur for his bills in total. Print on screen what is the amount left that Bob has for the rest of the month, and what is the total amount of his expenses.",
  vezba6:
    "One student has 5 exams in the first semester. Student name is Bob Bobsky. His/Her grades for all of the exams are Math = 10, English = 6, Science = 8, Sport = 9, Chemistry = 6 respectively. The professor told the students that for passing the first semester they must have average of 8. The student needs to know whether they have passed the semester or not. Alert on screen if the student pass or not! Print on the screen all of the subjects and the student name aswell.",
  vezba7:
    "Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. If the number is divisible by 3, then write 'Fizz' in the console, if the number is divisible by 7, then write 'Buzz' in the console, and if the number is divisible by 3 and 7, write 'FizzBuzz' in the console.",
  vezba8:
    "Write a simple JavaScript program to join all elements of the an array into a string. The array should have at least 5 elements",
  vezba9:
    "Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values). Create a function that will work for every array in the world :) and it will remove all the falsy values from the array.",
  vezba10:
    "Write a JavaScript function called storyTeller(), that will take as an input parameters the input fields values from the html! ex: storyTeller(who, what, when) In the function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like Example: Lancelot was a really strong knight in the middle age! )",
};
console.log(typeof vezbi);
console.log(vezbi);

function PrintExcercises(inputObject, numOfProps) {
  if (numOfProps > Object.keys(inputObject).length) {
    alert("Too many exercises, give the students some time to learn!!");
    return;
  }
  if (numOfProps < 0 || isNaN(numOfProps)) {
    alert("Invalid number of exercises. Please enter a positive number.");
    return;
  }

  let values = Object.values(inputObject);
  container.innerHTML = "";

  for (let i = 0; i < values.length; i++) {
    if (i >= numOfProps) {
      break;
    }
    container.innerHTML += `<p style="color: navy; font-size: 16px;"> Vezba ${
      i + 1
    }: ${values[i]}</p>`;
    container.innerHTML +=
      "---------------------------------------------------";
  }
}
function ClearHtml(inputElement) {
  inputElement.innerHTML = "";
}

clearButton.addEventListener("click", function () {
  ClearHtml(container);
});

submitButton.addEventListener("click", function () {
  let numberOfExcercises = numOfExcercises.value;
  PrintExcercises(vezbi, numberOfExcercises);
  numOfExcercises.value = "";
});

let specificExInput = document.getElementById("specificExId");
let getSpecificExBtn = document.getElementById("getSpecificExBtn");

function getSpecificExercise(exercises, exNumber) {
  let exercise = exercises["vezba" + exNumber];
  if (exercise) {
    container.innerHTML = `<p>Vezba ${exNumber}: ${exercise}</p>`;
  } else {
    alert("No exercise found for number " + exNumber);
  }
}

getSpecificExBtn.addEventListener("click", function () {
  let exNumber = specificExInput.value;
  getSpecificExercise(vezbi, exNumber);
  specificExInput.value = "";
  getSpecificExBtn.style.backgroundColor = "blue";
  getSpecificExBtn.style.color = "white";
  getSpecificExBtn.style.padding = "10px 20px";
  getSpecificExBtn.style.border = "none";
  getSpecificExBtn.style.margin = "5px";
});

function toggleTheme() {
  if (container.style.backgroundColor === "black") {
    container.style.backgroundColor = "lightblue";
    container.style.color = "black";
  } else {
    container.style.backgroundColor = "black";
    container.style.color = "white";
  }
}

let toggleThemeBtn = document.getElementById("toggleThemeBtn");
toggleThemeBtn.addEventListener("click", toggleTheme);
