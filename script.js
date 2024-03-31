const myLibrary = [new Book('Crime', 'Dostoyvskey', 700), new Book('Crime and punishment', 'Dostoyvskey', 700)];
const container = document.querySelector(".books");


function Book(name, author, numPages) {
    this.name = name;
    this.author = author;
    this.numPages = numPages;
}

function addBookToLibrary() {
    let bookName = prompt("Enter name of book:");
    let bookAuthor = prompt("Enter book author:");
    let numPages = prompt("Enter number of pages:");

    let newBook = new Book(bookName, bookAuthor, numPages);
    myLibrary.push(newBook);
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const currBook = document.createElement('div');
        currBook.classList.add('single-book');
        
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const numPages = document.createElement('div');
        
        bookTitle.textContent = myLibrary[i].name;
        bookAuthor.textContent = myLibrary[i].author;
        numPages.textContent = myLibrary[i].numPages;

        currBook.appendChild(bookTitle);
        currBook.appendChild(bookAuthor);
        currBook.appendChild(numPages);

        container.appendChild(currBook);
    }
}

displayBooks()