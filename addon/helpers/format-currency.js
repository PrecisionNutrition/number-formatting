import { helper as buildHelper } from '@ember/component/helper';
import formatCurrency from '@precision-nutrition/number-formatting/utils/format-currency';

export default buildHelper(function (_, { value }) {
  return formatCurrency(value);
});
