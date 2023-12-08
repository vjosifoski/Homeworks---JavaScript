let input = prompt("Enter a number");
let fridayCash = parseFloat(input);

console.log(fridayCash);

if (fridayCash >= 100) {
    console.log("Wow, you've got a lot of cash! You can enjoy a fancy dinner and a movie!");
}
else if (fridayCash >= 50) {
    console.log("You have a decent amount. How about treating yourself to a nice dinner?");
}
else if (fridayCash >= 10) {
    console.log("You've got enough for a movie. Enjoy some entertainment!");
}
else {
    console.log("Looks like a cozy night at home! You can still relax and watch TV. :)");
}