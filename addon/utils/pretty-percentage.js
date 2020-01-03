import roundNumber from '@precision-nutrition/unit-utils/utils/round-number';

export default function prettyPercentage(decimalValue, precision=0) {
  if (decimalValue === null || Number.isNaN(decimalValue)) {
    return;
  }

  let convertedValue = Number(decimalValue) * 100;
  let rounder = roundNumber(convertedValue, precision);

  return `${rounder}%`;
}
