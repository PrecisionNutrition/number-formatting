import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-currency', function (hooks) {
  setupRenderingTest(hooks);

  test('it returns cents converted to a pretty US dollar string', async function (assert) {
    this.set('value', 123);

    await render(hbs`{{format-currency value=value}}`);

    assert.dom(this.element).hasText('$1.23 (USD)');
  });
});
