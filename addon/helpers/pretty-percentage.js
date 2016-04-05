import Ember from 'ember';
import { default as prettyPercentageSuper } from 'number-formatting/utils/pretty-percentage';

export function prettyPercentage(_, { decimalValue, precision=0 }) {
  let value = prettyPercentageSuper(decimalValue, precision);

  return value;
}

export default Ember.Helper.helper(prettyPercentage);
