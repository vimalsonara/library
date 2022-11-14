const form = document.querySelector('.addForm');
const popUpForm = document.querySelector('.popUp');
const openBtn = document.querySelector('.newBook');
const bookContainer = document.querySelector('.book-container');

// event listener to open modal
openBtn.addEventListener('click', () => {
    popUpForm.showModal();
})

// take user input & add book to library array
form.addEventListener('submit', e => {
    e.preventDefault();

    addBookToLibrary();
    form.reset();
    popUpForm.close();
})

let library = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


// add book to libray & create book card using DOM
function addBookToLibrary() {
    
    let bookTitle = form.title.value.trim();
    let bookAuthor = form.author.value.trim();
    let bookPages = form.pages.value.trim();
    let isRead = form.read.checked;
    
    const newBook = new Book(bookTitle, bookAuthor, bookPages, isRead);
    library.push(newBook);
    createCard(newBook);
}


// create book card
function createCard(item) {
    const bookContainer = document.querySelector('.book-container');
    const bookCard = document.createElement('div')
    const bookTitle = document.createElement('p')
    const bookAuthor = document.createElement('p')
    const bookPages = document.createElement('p')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')
    

    bookTitle.innerHTML = item.title;
    bookAuthor.innerHTML = item.author;
    bookPages.innerHTML = item.pages;
    
    const readStatus = item.read;
    if(readStatus === true) {
        readBtn.innerHTML = 'Read';
        readBtn.classList.add('btn-green');
    } else {
        readBtn.innerHTML = 'Not Read';
        readBtn.classList.add('btn-red');
    }

    removeBtn.innerHTML = 'Remove';
    readBtn.classList.add('btn', 'isRead');
    removeBtn.classList.add('btn', 'remove');

    bookCard.classList.add('book');
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(removeBtn);
    bookContainer.appendChild(bookCard);
}

// toggle read button
bookContainer.addEventListener('click', e => {
    if(e.target.innerHTML === 'Read') {
        e.target.classList.remove('btn-green');
        e.target.innerHTML = 'Not Read';
        e.target.classList.add('btn-red');
    } else {
        e.target.classList.remove('btn-red');
        e.target.innerHTML = 'Read';
        e.target.classList.add('btn-green');
    }
})

// delete book
bookContainer.addEventListener('click', e => {
    if(e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
    }
})