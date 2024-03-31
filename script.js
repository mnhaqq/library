const myLibrary = [];
const container = document.querySelector(".books");
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", addBookToLibrary, false);

displayBooks();

function Book(name, author, numPages, hasRead) {
    this.name = name;
    this.author = author;
    this.numPages = numPages;
    this.hasRead = hasRead;
}

function displayBooks() {
    container.textContent = ""
    for (let i = 0; i < myLibrary.length; i++) {
        createBookCard(myLibrary[i]);
    }
}

function createBookCard(book) {
    const currBook = document.createElement('div');
    currBook.classList.add('single-book');
    
    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const numPages = document.createElement('div');
    const hasRead = document.createElement('button');
    const removeBook = document.createElement('button');
    
    bookTitle.textContent = book.name;
    bookAuthor.textContent = book.author;
    numPages.textContent = book.numPages + ' pages';

    hasRead.addEventListener("click", () => {
        if (hasRead.textContent == "Unread") hasRead.textContent = "Read";
        else hasRead.textContent = "Unread"; 
    });
    hasRead.textContent = book.hasRead;
    
    removeBook.textContent = 'Remove Book';
    removeBook.addEventListener("click", () => {
        const bookIndex = myLibrary.findIndex(book => book.name === bookTitle.textContent);
        if (bookIndex > -1) {
            myLibrary.splice(bookIndex, 1);
        }
        container.removeChild(currBook);
    });

    currBook.appendChild(bookTitle);
    currBook.appendChild(bookAuthor);
    currBook.appendChild(numPages);
    currBook.appendChild(hasRead);
    currBook.appendChild(removeBook);

    container.appendChild(currBook);
}

function addBookToLibrary(event) { 
    const newBookName = document.querySelector("#book-name").value;
    const newBookAuthor = document.querySelector("#book-author").value;
    const newBookPages = document.querySelector("#book-pages").value;
    
    let newBook = new Book(newBookName, newBookAuthor, newBookPages, 'Unread');
    myLibrary.push(newBook);
    createBookCard(myLibrary[myLibrary.length - 1]);

    event.preventDefault();
}