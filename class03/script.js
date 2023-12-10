function printType(value) {
    let type = typeof value;
    console.log("The type of the value is: " + type);
}

console.log({name: "Bob"});
console.log(true);
console.log(118);
console.log("Hello");
console.log(undefined);


function calculateDogAge(age, isHumanToDog = true) {
    if (isHumanToDog) {
      return age * 7;
    } else {
      return age / 7;
    }
  }
  
  console.log("Your dog is " + calculateDogAge(6) + " dog years old.");
  console.log("A dog of 49 dog years is " + calculateDogAge(49, false) + " human years old.");


  function withdrawFromATM() {
    let accountBalance = 3000;
    let requestedAmount = parseInt(prompt("Enter the amount to withdraw:", "0"), 10);

    if (isNaN(requestedAmount)) {
        return "Invalid entry";
    }

    if (requestedAmount > accountBalance) {
        return "Not enough money";
    } else {
        accountBalance -= requestedAmount;
        return "Amount withdrawn: $" + requestedAmount + ". Balance remaining on the account: $" + accountBalance;
    }
}

// Calling the function
console.log(withdrawFromATM());

  