let physics = parseFloat(prompt("Enter Physics marks: "));
let chemistry = parseFloat(prompt("Enter Chemistry marks: "));
let biology = parseFloat(prompt("Enter Biology marks: "));
let mathematics = parseFloat(prompt("Enter Mathematics marks: "));
let computer = parseFloat(prompt("Enter Computer marks: "));

let totalMarks = physics + chemistry + biology + mathematics + computer;
let percentage = (totalMarks / 500) * 100;

let grade;

if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else if (percentage >= 40) {
    grade = 'E';
} else {
    grade = 'F';
}

console.log(`Total Marks: ${totalMarks}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Grade: ${grade}`);
