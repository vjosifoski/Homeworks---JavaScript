let input = prompt("Please enter your birth year to see your Chinese Zodiac Sign: ");
let birthYear = parseFloat(input);

console.log(`The Birth year you entered is ${birthYear}`);

let zodiacCalculation = (birthYear - 4) % 12;
console.log(zodiacCalculation);

if (zodiacCalculation === 0) {
    console.log("Your Chinese Zodiac is Rat");
} else if (zodiacCalculation === 1) {
    console.log("Your Chinese Zodiac is Ox");
} else if (zodiacCalculation === 2) {
    console.log("Your Chinese Zodiac is Tiger");
} else if (zodiacCalculation === 3) {
    console.log("Your Chinese Zodiac is Rabbit");
} else if (zodiacCalculation === 4) {
    console.log("Your Chinese Zodiac is Dragon");
} else if (zodiacCalculation === 5) {
    console.log("Your Chinese Zodiac is Snake");
} else if (zodiacCalculation === 6) {
    console.log("Your Chinese Zodiac is Horse");
} else if (zodiacCalculation === 7) {
    console.log("Your Chinese Zodiac is Goat");
} else if (zodiacCalculation === 8) {
    console.log("Your Chinese Zodiac is Monkey");
} else if (zodiacCalculation === 9) {s
    console.log("Your Chinese Zodiac is Rooster");
} else if (zodiacCalculation === 10) {
    console.log("Your Chinese Zodiac is Dog");
} else {
    console.log("Your Chinese Zodiac is Pig");
}
