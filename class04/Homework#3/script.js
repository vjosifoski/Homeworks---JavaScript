function join(stringArray) {
    let result = "";

    for (let i = 0; i < stringArray.length; i++) {
        result += stringArray[i];

        if (i < stringArray.length - 1) {
            result += " ";
        }
    }

    return result;
}

const exampleArray = ["Hello", "there", "students", "of", "QINSHIFT", "!"];
const result = join(exampleArray);

console.log(result);