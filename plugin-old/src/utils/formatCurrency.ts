export type CurrencyOptionsType = {
  locale?: string;
  currency?: string;
};
function formatCurrency(
  value: string | number,
  options?: CurrencyOptionsType
): string {
  const { locale = "en-US", currency = "USD" } = options || {};
  const number = typeof value === "string" ? parseFloat(value) : value;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(number);
}

export default formatCurrency;
