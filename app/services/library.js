import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LibraryService extends Service {
  @tracked libraryBooks = [
    {
      id: 1,
      name: 'Lord of the Rings',
      author: 'J.R.R. Tolkien',
    },
    {
      id: 2,
      name: 'Don Quixote',
      author: 'Miguel de Cervantes',
    },
  ];

  @action
  addBook(newBook) {
    let data = [...this.libraryBooks];
    newBook.id = this.libraryBooks.length + 1;
    data.push(newBook);
    this.libraryBooks = data;
    console.log(data);
  }
  @action
  updateBook(bookRecord) {
    let data = [...this.libraryBooks];
    var foundIndex = data.findIndex((x) => x.id == bookRecord.id);
    data[foundIndex] = bookRecord;
    this.libraryBooks = data;
  }
  @action
  deleteBook(bookId) {
    let data = [...this.libraryBooks];

    const newRecord = data.filter((value) => {
      return value.id != bookId;
    });
    this.libraryBooks = newRecord;
    return newRecord;
  }

  @action
  getBookById(bookId) {
    let data = [...this.libraryBooks];

    const newRecord = data.filter((value) => {
      return value.id == bookId;
    })[0];
    return newRecord;
  }
}
