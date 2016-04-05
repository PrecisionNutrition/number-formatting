export default function formatCurrency(cents) {
  let dollars;

  if (cents) {
    dollars = cents / 100;
  } else {
    dollars = 0;
  }

  return `$${dollars.toFixed(2)} (USD)`;
}
