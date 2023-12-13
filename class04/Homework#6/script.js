function fullNames(firstNames, lastNames) {
    return firstNames.map((firstName, index) => {
        return `${index + 1}. ${firstName} ${lastNames[index]}`;
    });
}

const first = ["Bob", "Jill", "Vladimir"];
const last = ["Gregory", "Wurtz", "Josifoski"];
const full = fullNames(first, last);

console.log(full);