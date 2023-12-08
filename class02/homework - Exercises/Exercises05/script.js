let userInput = prompt("Enter a number:");
if (isNaN(userInput)) {
  console.log("The input is not a number.");
} else if (userInput === "") {
  console.log("The input is empty.");
} else {
  console.log("The input is a number.");
}