import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | library/addbook', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:library/addbook');
    assert.ok(route);
  });
});
