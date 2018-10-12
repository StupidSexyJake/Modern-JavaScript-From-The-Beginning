// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {
}
    // Add book to list prototype
    UI.prototype.addBookToList = function(book) {
        const elList = document.getElementById("book-list");
        // Create tr element
        const elRow = document.createElement("tr");
        // Insert cols
        elRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `
        elList.appendChild(elRow);
    }
    // Clear fields prototype
    UI.prototype.clearFields = function() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
    // Show alert prototype
    UI.prototype.showAlert = function(msg, className) {
        // Create div
        const elDiv = document.createElement("div");
        // Add classes
        elDiv.className = `alert ${className}`;
        // Add text
        elDiv.appendChild(document.createTextNode(msg));
        // Get parent
        const elContainer   = document.querySelector(".container"),
              elForm        = document.getElementById("book-form");
        // Insert div
        elContainer.insertBefore(elDiv, elForm);
        // Timeout after 3 sec
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000);
    }
    // Delete book prototype
    UI.prototype.deleteBook = function(target) {
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }

// Event listener for add book
document.getElementById("book-form").addEventListener("submit", function(e) {
    // Get form values
    const elTitle   = document.getElementById("title").value,
          elAuthor  = document.getElementById("author").value,
          elIsbn    = document.getElementById("isbn").value;
    // Instantiate book
    const book = new Book(elTitle, elAuthor, elIsbn);
    // Instantiate UI
    const ui = new UI();
    // Validate
    if (elTitle === "" || elAuthor === "" || elIsbn === "") {
        // Error alert
        ui.showAlert("Please fill in all fields", "error");
    } else {
        // Add book to list
        ui.addBookToList(book);
        // Show success message
        ui.showAlert("Book successfully added!", "success");
        // Clear fields
        ui.clearFields();
    }
    // Prevent default behaviour
    e.preventDefault();
});

// Event listener for delete
document.getElementById("book-list").addEventListener("click", function(e){
    // Instantiate UI
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert("Book removed from list", "success");
    e.preventDefault();
})