import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LibraryRoute extends Route {
  @service('library') libraryService;

  model() {
    let books = this.libraryService.libraryBooks;
    return books;
  }
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('books', model);
  }
  @action
  didTransition() {
    let books = this.libraryService.libraryBooks;
    this.controller.books = books;
  }
}
