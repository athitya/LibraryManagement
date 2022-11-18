import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class LibraryAddbookController extends Controller {
    @tracked isEdit=false;
    @tracked editBook = {
        id: '',
        name: '',
        author: '',
      };
}
