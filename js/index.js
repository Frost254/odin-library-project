let myLibrary = [

    {
        title: "Bleach",
        author: "Tite Kubo",
        pages: 678
    },
    {
        title: "Harry Potter",
        author: "JK Rowlings",
        pages: 500
    }

];

const libraryToJSON = JSON.stringify(myLibrary)

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}

function addBookToLibrary () {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;

    const newBook = new Book(title, author, pages)
    console.log(newBook)
    myLibrary.push(newBook)
    localStorage.setItem("myLibrary", libraryToJSON)
    console.log(myLibrary)
}

document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        addBookToLibrary();
        form.reset();
    })
});

function renderBook(book) {
    let li = document.createElement("li");
    li.className = "li";
    li.innerHTML = `
    <h1>Book Title: ${book.title}</h1>
    <p>Author: ${book.author}</p>
    <p class="like">Number of pages: ${book.pages} pages</p>
    `
    document.querySelector("#books").appendChild(li)
}
function handleBooks (arr) {
    arr.forEach((book) => {
        renderBook(book)
    });
}

handleBooks(myLibrary)
