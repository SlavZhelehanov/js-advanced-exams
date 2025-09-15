class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity === this.books.length) throw new Error("Not enough space in the collection.");
        this.books.push({bookName, bookAuthor, payed: false});
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        let book = this.books.find((book) => book.bookName === bookName);

        if (!book) throw new Error(`${bookName} is not in the collection.`);
        if (book.payed) throw new Error(`${bookName} has already been paid.`);
        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let book = this.books.find((book) => book.bookName === bookName);

        if (!book) throw new Error("The book, you're looking for, is not found.");
        if (!book.payed) throw new Error(`${bookName} need to be paid before removing from the collection.`);
        this.books = this.books.filter(book => book.bookName !== bookName);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        let output = [];

        if (!bookAuthor) {
            output.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            [...this.books].sort((a, b) => a.bookName.localeCompare(b.bookName)).forEach(({bookName, bookAuthor, payed}) => output.push(`${bookName} == ${bookAuthor} - ${payed ? "Has Paid" : "Not Paid"}.`));
        } else if (!this.books.some(book => book.bookAuthor === bookAuthor)) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        } else {
            this.books.filter(book => book.bookAuthor === bookAuthor).forEach(({bookName, bookAuthor, payed}) => output.push(`${bookName} == ${bookAuthor} - ${payed ? "Has Paid" : "Not Paid"}.`));
        }
        return output.join('\n');
    }
}

// Input 1
// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// Input 2
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// Input 3
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// Input 4
// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

// Input 5
// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());
