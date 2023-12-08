let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
let num3 = parseFloat(prompt("Enter the third number: "));

let max = num1;

if (num2 > max) {
    max = num2;
}

if (num3 > max) {
    max = num3;
}

console.log("The maximum number is " + max);
