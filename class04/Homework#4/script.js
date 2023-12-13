let output = "";

for (let i = 1; i <= 20; i++) {
    output += i + ((i % 2 === 0) ? "\n" : " ");
}

console.log(output);