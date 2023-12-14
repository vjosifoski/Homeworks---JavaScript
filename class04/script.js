console.log("");
console.log("======Homework01======");

function tellStory([name, mood, activity]) {
    return `This is ${name}. Today they are ${mood}. They are ${activity} all day.`;
}

let story = tellStory(["John", "happy", "painting"]);
console.log(story);

console.log("");
console.log("======Homework02======");

function validateNumber(number) {
    return typeof number === 'number' && !isNaN(number);
}

function sumNumbers(numbers) {
    let sum = 0;
    for (let number of numbers) {
        if (!validateNumber(number)) {
            return "Error: One of the numbers is invalid.";
        } else {
            sum += number;
        }
    }
    return sum;
}

let result1 = sumNumbers([3, 7, 9, 13, 19]);
console.log(result1);

console.log("");
console.log("======Homework03======");

function concatenateStrings(arrayOfStrings) {
    let combinedString = "";
    for (let i = 0; i < arrayOfStrings.length; i++) {
        combinedString += arrayOfStrings[i];
        if (i < arrayOfStrings.length - 1) {
            combinedString += " ";
        }
    }
    return combinedString;
}

let result2 = concatenateStrings(["Hello", "there", "students", "of", "Qinshift", "!"]);
console.log(result2);

console.log("");
console.log("======Homework04======");

let output = "";

for (let i = 1; i <= 20; i++) {
    output += i;
    if (i % 2 === 0) {
        output += "\n";
    } else {
        output += " ";
    }
}

console.log(output);


console.log("");
console.log("======Homework05======");

function sumMaxMin(numbers) {
    let max = -Infinity;
    let min = Infinity;

    for (let number of numbers) {
        if (typeof number === 'number') {
            if (number > max) {
                max = number;
            }
            if (number < min) {
                min = number;
            }
        }
    }

    if (max === -Infinity || min === Infinity) {
        return "No valid numeric values found.";
    }

    let sum = max + min;
    return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

let result = sumMaxMin([3, 5, 6, 8, 11]);
console.log(result);

let mixedResult = sumMaxMin([3, "a", 6, 8, 11, true]);
console.log(mixedResult);

console.log("");
console.log("======Homework06=======");

function combineArrays(array1, array2) {
    let combinedArray = [];
    let length;

    if (array1.length > array2.length) {
        length = array2.length;
    } else {
        length = array1.length;
    }

    for (let i = 0; i < length; i++) {
        combinedArray[i] = `${array1[i]} ${array2[i]}`;
    }
    return combinedArray;
}

let firstArray = ["Bob", "Jill", "Vladimir"];
let secondArray = ["Gregory", "Wurtz", "Josifoski"];
let combined = combineArrays(firstArray, secondArray);
console.log(combined);