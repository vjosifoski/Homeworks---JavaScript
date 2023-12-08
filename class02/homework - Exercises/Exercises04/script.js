const weekNumber = parseInt(prompt("Enter the week number: "));
let day;

if (weekNumber === 1) {
    day = 'Sunday';
} else if (weekNumber === 2) {
    day = 'Monday';
} else if (weekNumber === 3) {
    day = 'Tuesday';
} else if (weekNumber === 4) {
    day = 'Wednesday';
} else if (weekNumber === 5) {
    day = 'Thursday';
} else if (weekNumber === 6) {
    day = 'Friday';
} else if (weekNumber === 7) {
    day = 'Saturday';
} else {
    console.log("Invalid week number");
}

if (day) {
    console.log(`The day of the week for week ${weekNumber} is ${day}`);
}
