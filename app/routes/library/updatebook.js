import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LibraryUpdatebookRoute extends Route {
    @service('library') libraryService;

    model(params){
        const {book_id} = params;
        let book = this.libraryService.getBookById(book_id);
        return book;
    }
}
