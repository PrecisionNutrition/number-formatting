import Ember from 'ember';
import { default as formatCurrencySuper } from 'number-formatting/utils/format-currency';

export function formatCurrency(_, { value }) {
  let formatted = formatCurrencySuper(value);

  return formatted;
}

export default Ember.Helper.helper(formatCurrency);
