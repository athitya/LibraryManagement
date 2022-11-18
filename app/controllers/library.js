import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LibraryController extends Controller {
  @tracked books = this.model;
  constructor(...args) {
    super(...args);
    console.log('hit', this.model);
  }
}
