let numRows = 0;
let numCols = 0;

function createDynamicTable() {
    numRows = parseInt(prompt("Enter the number of rows:"));
    numCols = parseInt(prompt("Enter the number of columns:"));

    if (isNaN(numRows) || isNaN(numCols)) {
        alert('Please enter numbers for rows and columns.');
        return;
    }

    let result = [];

    let table = document.createElement("table");
    table.style.border = "1px solid black";
    
    for (let row = 0; row < numRows; row++) {
        let tr = document.createElement("tr");
        for (let col = 0; col < numCols; col++) {
            let td = document.createElement("td");
            td.style.border = "1px solid black";
            td.style.padding = "5px";
            td.textContent = "Row-" + (row + 1) + " Column-" + (col + 1);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    document.getElementById("tableContainer").appendChild(table);
}

createDynamicTable();
