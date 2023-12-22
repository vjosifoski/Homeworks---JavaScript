function Book(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    this.displayStatus = function() {
        if (this.readingStatus) {
            return `Already read '${this.title}' by ${this.author}.`;
        } else {
            return `You still need to read '${this.title}' by ${this.author}.`;
        }
    };
}

let books = [
    new Book("Philosopher's Stone", "J. K. Rowling", true),
    new Book("Chamber of Secrets", "J. K. Rowling", false),
    new Book("Prisoner of Azkaban", "J. K. Rowling", true),
    new Book("Goblet of Fire", "J. K. Rowling", false),
    new Book("Order of the Phoenix", "J. K. Rowling", true),
    new Book("Half-Blood Prince", "J. K. Rowling", false),
    new Book("Deathly Hallows", "J. K. Rowling", true)
];

let selectElement = document.getElementById('books');

selectElement.addEventListener('change', function() {
    let bookIndex = this.value;
    let selectedBook;

    if (bookIndex !== 'placeholder') {
        selectedBook = books[bookIndex];
        let statusMessage = selectedBook.displayStatus();
        document.getElementById('result').textContent = statusMessage;
    } else {
        document.getElementById('result').textContent = "Please select a book.";
    }
});

