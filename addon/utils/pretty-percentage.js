import roundNumber from '@precision-nutrition/unit-utils/utils/round-number';

export default function prettyPercentage(decimalValue, precision = 0) {
  if (decimalValue === null || Number.isNaN(decimalValue)) {
    return;
  }

  const convertedValue = Number(decimalValue) * 100;
  const rounder = roundNumber(convertedValue, precision);

  return `${rounder}%`;
}
