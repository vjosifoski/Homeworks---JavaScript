function sumOfMaxAndMin(array) {
    let filteredArray = array.filter(item => typeof item === 'number');

    if (filteredArray.length === 0) {
        return "No numbers in the array.";
    }

    let max = Math.max(...filteredArray);
    let min = Math.min(...filteredArray);

    let sum = max + min;

    return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}
const array = [3, 5, 'a', 6, 8, 11, 'word', true];
console.log(sumOfMaxAndMin(array));
