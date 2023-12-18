console.log("");
console.log("======HOMEWORK PART 01========");


let firstHeader = document.getElementById("myTitle");
firstHeader.textContent = "This is text from JS";

let paragraph = document.getElementsByClassName('paragraph')[0];
paragraph.textContent = "this is an exercise. It's pretty hard";

let paragraphSecondText = document.getElementsByClassName("paragraph")[1];
paragraphSecondText.textContent = "BE AMAZED! SEE HOW MUCH YOU WEIGHT IN CHICKENS";

let textElement = document.querySelector('.anotherDiv text');
textElement.style.backgroundColor = 'red';

let lastHeader1 = document.getElementsByTagName('h1')[1];
lastHeader1.textContent = "This is the last Header1!"

let lastHeader3 = document.getElementsByTagName('h3')[0];
lastHeader3.textContent = "This is the last Header3!"
