import EmberRouter from '@ember/routing/router';
import config from 'library/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('library', function () {
    this.route('addbook');
    this.route('updatebook', { path: '/update-book/:book_id' });
  });
});
