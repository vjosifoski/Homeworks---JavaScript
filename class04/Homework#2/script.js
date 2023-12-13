function sumNumbers(numbers) {
    for (let number of numbers) {
        if (!validateNumber(number)) {
            return "Error: One of the numbers is invalid.";
        }
    }

    let sum = 0;
    for (let number of numbers) {
        sum = sum + number;
    }
    return sum;
}

function validateNumber(number) {
    return typeof number === 'number' && !isNaN(number);
}

const numbersArray = [7, 15, 3, 22, 6];
const result = sumNumbers(numbersArray);

console.log(result);