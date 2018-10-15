// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI class
class UI {
    addBookToList(book) {
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
    showAlert(msg, className) {
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
    deleteBook(target) {
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }
    clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
}

// Local storage class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(function(book) {
            const ui = new UI;
            ui.addBookToList(book);
        });
    }
    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = Store.getBooks();        
        books.forEach(function(book, index) {
            if (book.isbn = isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem("books", JSON.stringify(books));
    }
}
// DOM Load Event
document.addEventListener("DOMContentLoaded", Store.displayBooks);

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
        // Add to local storage
        Store.addBook(book);
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

    const ui = new UI();
    ui.showAlert("Book removed from list", "success");
    ui.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    e.preventDefault();
})