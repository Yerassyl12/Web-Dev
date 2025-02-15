
let rowCount = 0;

function addRow() {
    const name = document.getElementById('Name').value.trim();
    const description = document.getElementById('Description').value.trim();

    if (name && description) {
        rowCount++;

        const mainTable = document.getElementById("mainTable").getElementsByTagName('tbody')[0];
        const newRow = mainTable.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.innerText = rowCount;
        cell2.innerText = name;
        cell3.innerText = description;
        cell4.innerHTML = '<input type="checkbox" class="chechbox">';

        newRow.addEventListener("click", function (event) {
            if (event.target.type !== "checkbox") {
                this.classList.toggle("selected");
            }
        });

        document.getElementById('Name').value = '';
        document.getElementById('Description').value = '';
    } else {
        alert("Fill in all fields!");
    }
}

function deleteRow() {
    const selectedRow = document.querySelector("#mainTable tbody .selected");
    if (selectedRow) {
        selectedRow.remove();
        updateRowNumbers(); 
    } else {
        alert("Select a row to delete!");
    }
}

function updateRowNumbers() {
    const rows = document.querySelectorAll("#mainTable tbody tr");
    rowCount = 0; 
    rows.forEach((row, index) => {
        row.cells[0].innerText = index + 1; 
        rowCount++;
    });
}