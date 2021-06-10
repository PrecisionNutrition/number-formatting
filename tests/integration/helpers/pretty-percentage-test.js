import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | pretty-percentage', function (hooks) {
  setupRenderingTest(hooks);

  test('renders the percentage string with a precision of 0', async function (assert) {
    this.setProperties({ decimalValue: 0.123, precision: 0 });

    await render(hbs`{{pretty-percentage decimalValue=decimalValue precision=precision}}`);

    assert.dom(this.element).hasText('12%');
  });

  test('renders the percentage string with a precision of 1', async function (assert) {
    this.setProperties({ decimalValue: 0.123, precision: 1 });

    await render(hbs`{{pretty-percentage decimalValue=decimalValue precision=precision}}`);

    assert.dom(this.element).hasText('12.3%');
  });

  test('renders the percentage string with a precision of 1 and value > 100%', async function (assert) {
    this.setProperties({ decimalValue: 1.123, precision: 1 });

    await render(hbs`{{pretty-percentage decimalValue=decimalValue precision=precision}}`);

    assert.dom(this.element).hasText('112.3%');
  });
});
