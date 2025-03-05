document.getElementById("submit").addEventListener("click", function () {
    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let isbn = document.getElementById("isbn").value.trim();

    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields.");
        return;
    }

    let list = document.getElementById("book-list");
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete btn btn-danger btn-sm">Clear</button></td>
    `;

    list.appendChild(row);

    // Clear input fields after adding
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});

// Remove book entry on clicking "Clear"
document.getElementById("book-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }
});
