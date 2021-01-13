export function numberToCurrency(number) {
  const formatedNumber = new Intl.NumberFormat()
    .format(number)
    .replace(",", ".");
  return `$${formatedNumber}`;
}
