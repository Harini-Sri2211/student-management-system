const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");
const submitBtn = document.getElementById("submitBtn");

let editRow = null;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const dept = document.getElementById("dept").value;

    if (editRow === null) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${name}</td>
            <td>${roll}</td>
            <td>${dept}</td>
            <td>
                <button onclick="editStudent(this)">Edit</button>
                <button onclick="deleteStudent(this)">Delete</button>
            </td>
        `;

        table.appendChild(row);
    } else {
        editRow.children[0].innerText = name;
        editRow.children[1].innerText = roll;
        editRow.children[2].innerText = dept;

        editRow = null;
        submitBtn.innerText = "Add Student";
    }

    form.reset();
});

function editStudent(button) {
    editRow = button.parentElement.parentElement;

    document.getElementById("name").value = editRow.children[0].innerText;
    document.getElementById("roll").value = editRow.children[1].innerText;
    document.getElementById("dept").value = editRow.children[2].innerText;

    submitBtn.innerText = "Update Student";
}

function deleteStudent(button) {
    button.parentElement.parentElement.remove();
}
