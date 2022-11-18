import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookeditorComponent extends Component {
  @service('library') libraryService;

  @tracked editBook =this.args.editBook;
  @tracked errorMsg = '';
  @tracked success = '';
  @tracked isEdit = this.args.isEdit;

  @action
  addBook() {
    console.log(this.args)
    if (!this.editBook.name) {
      this.errorMsg = 'Name cannot be empty.';
      this.success = '';
      return;
    } else if (!this.editBook.author) {
      this.errorMsg = 'Author cannot be empty.';
      this.success = '';
      return;
    }
    let bookDetails = { ...this.editBook };
    if (!this.isEdit) {
      //add employee
      this.libraryService.addBook(bookDetails);
      this.errorMsg = '';
      this.success = 'Book ' + this.editBook.name + ' added.';
    }
    else {
      this.errorMsg = '';
      this.libraryService.updateBook(bookDetails);
      this.success = 'Book ' + this.editBook.name + ' Updated.';
    }
  }
}
