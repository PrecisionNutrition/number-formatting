import { formatCurrency } from 'dummy/helpers/format-currency';
import { module, test } from 'qunit';

module('Unit | Helper | format currency');

test('it returns cents converted to a pretty US dollar string', function(assert) {
  let result = formatCurrency(null, { value: 123 });

  assert.equal(result, "$1.23 (USD)");
});
