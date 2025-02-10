/**
 * Formats a number as currency.
 * @param {number} amount - The amount to format.
 * @param {string} [currency='USD'] - Currency code.
 * @param {string} [locale='en-US'] - Locale code.
 * @returns {string} - Formatted currency string.
 */
const formatCurrency = (amount: number, currency = "USD", locale = "en-US") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
};

export default formatCurrency;
