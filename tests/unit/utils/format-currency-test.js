import formatCurrency from 'dummy/utils/format-currency';
import { module, test } from 'qunit';

module('Unit | Utility | format currency', function () {
  test('it returns cents converted to a pretty US dollar string', function (assert) {
    let result = formatCurrency(123);
    assert.equal(result, '$1.23 (USD)');
  });
});
