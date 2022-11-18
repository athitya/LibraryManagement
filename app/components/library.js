import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LibraryComponent extends Component {
  @service('library') libraryService;
  @tracked libraryBooks = this.args.books;

  @action
  deleteBook(bookId) {
    this.libraryBooks = this.libraryService.deleteBook(bookId);
  }
}
