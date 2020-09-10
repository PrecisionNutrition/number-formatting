import { helper as buildHelper } from '@ember/component/helper';
import prettyPercentage from '@precision-nutrition/number-formatting/utils/pretty-percentage';

export default buildHelper(function(_, { decimalValue, precision=0 }) {
  return prettyPercentage(decimalValue, precision);
});
