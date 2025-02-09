let count = 3; // Начинаем с 3-й строки

    function addRow() {
        let table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = count++;
        cell2.innerHTML = "Имя " + (count - 1);
        cell3.innerHTML = Math.floor(Math.random() * 50) + 20; // Случайный возраст

        // Авто-прокрутка вниз
        let container = document.querySelector(".table-container");
        container.scrollTop = container.scrollHeight;
    }





    let selectedRow = null;

    function selectRow(row) {
        if (selectedRow) {
            selectedRow.classList.remove("selected"); // Убираем выделение с предыдущей
        }
        selectedRow = row;
        selectedRow.classList.add("selected"); // Добавляем выделение
    }

    function deleteRow() {
        if (selectedRow) {
            selectedRow.remove(); // Удаляем строку
            selectedRow = null; // Сбрасываем выбор
        } else {
            alert("Выберите строку для удаления!");
        }
    }






    function toggleDone(checkbox) {
        let row = checkbox.closest("tr"); // Находим строку, где стоит чекбокс
        if (checkbox.checked) {
            row.classList.add("done"); // Добавляем стиль "выполнено"
        } else {
            row.classList.remove("done"); // Убираем стиль
        }
    }







    function addTask() {
        let taskText = document.getElementById("newTask").value.trim();
        let doneChecked = document.getElementById("newDone").checked;
        let statusChecked = document.getElementById("newStatus").checked;

        if (taskText === "") {
            alert("Введите название задачи!");
            return;
        }

        let table = document.getElementById("taskTable").getElementsByTagName("tbody")[0];
        let newRow = table.insertRow(); // Создаем новую строку

        let cell1 = newRow.insertCell(0); // Номер
        let cell2 = newRow.insertCell(1); // Задача
        let cell3 = newRow.insertCell(2); // Чекбокс "Выполнено"
        let cell4 = newRow.insertCell(3); // Чекбокс "Статус"

        cell1.innerHTML = table.rows.length; // Автоматическая нумерация
        cell2.innerHTML = taskText;
        
        let doneCheckbox = document.createElement("input");
        doneCheckbox.type = "checkbox";
        doneCheckbox.onclick = function () {
            toggleDone(doneCheckbox);
        };
        if (doneChecked) {
            doneCheckbox.checked = true;
            newRow.classList.add("done");
        }
        cell3.appendChild(doneCheckbox);

        let statusCheckbox = document.createElement("input");
        statusCheckbox.type = "checkbox";
        statusCheckbox.onclick = function () {
            toggleStatus(statusCheckbox);
        };
        if (statusChecked) {
            statusCheckbox.checked = true;
            cell4.classList.add("status-checked");
        }
        cell4.appendChild(statusCheckbox);

        // Очищаем поля ввода
        document.getElementById("newTask").value = "";
        document.getElementById("newDone").checked = false;
        document.getElementById("newStatus").checked = false;
    }