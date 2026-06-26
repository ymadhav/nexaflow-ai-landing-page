/**
 * Compute the final display price for a tier.
 * Formula: baseMonthlyUSD × currency.rate × currency.tariff × billing.multiplier
 *
 * @param {number} baseMonthlyUSD
 * @param {object} currency  - { symbol, rate, tariff, locale }
 * @param {object} billing   - { label, multiplier, suffix, badge }
 * @returns {{ formatted: string, raw: number }}
 */
export function computePrice(baseMonthlyUSD, currency, billing) {
  const raw = baseMonthlyUSD * currency.rate * currency.tariff * billing.multiplier;

  // Format with the currency's locale for proper thousands/decimal separators
  const formatted = new Intl.NumberFormat(currency.locale, {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(Math.round(raw));

  return { formatted, raw };
}
