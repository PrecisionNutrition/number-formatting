import { helper as buildHelper } from '@ember/component/helper';
import { default as prettyPercentageSuper } from '@precision-nutrition/number-formatting/utils/pretty-percentage';

export function prettyPercentage(_, { decimalValue, precision=0 }) {
  let value = prettyPercentageSuper(decimalValue, precision);

  return value;
}

export default buildHelper(prettyPercentage);
