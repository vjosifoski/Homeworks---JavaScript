let nameElement = document.getElementById("name");
let kindElement = document.getElementById("kind");
let speakButton = document.getElementById("speak");
let displayElement = document.getElementById("display");

function Animal (name, kind) {
    this.name = name;
    this.kind = kind;

    this.speak = function (greet) {
        console.log(`${name} says: ${greet}`);
        return `${name} says: ${greet}`;
    }
}

speakButton.addEventListener('click', function () {
    let name = nameElement.value;
    let kind = kindElement.value;
    let newAnimal = new Animal (name, kind);
    console.log(newAnimal);
    displayElement.innerHTML += newAnimal.speak("Hey Bro!");
    nameElement.value = "";
    kindElement.value = "";
})