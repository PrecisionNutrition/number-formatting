import { helper as buildHelper } from '@ember/component/helper';
import { default as formatCurrencySuper } from '@precision-nutrition/number-formatting/utils/format-currency';

export function formatCurrency(_, { value }) {
  let formatted = formatCurrencySuper(value);

  return formatted;
}

export default buildHelper(formatCurrency);
