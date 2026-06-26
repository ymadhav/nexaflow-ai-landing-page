export const pricingMatrix = {
  starter: {
    label: 'Starter',
    baseMonthlyUSD: 19,
    description: 'For founders validating automation workflows.',
    popular: false,
    features: [
      '3 active workflows',
      'Up to 10K events/month',
      '5 data source connectors',
      'Basic anomaly detection',
      'Email support',
      'REST API access',
    ],
  },
  growth: {
    label: 'Growth',
    baseMonthlyUSD: 49,
    description: 'For teams scaling AI-powered operations.',
    popular: true,
    features: [
      'Unlimited workflows',
      'Up to 500K events/month',
      '25 data source connectors',
      'Advanced AI anomaly detection',
      'Real-time analytics dashboard',
      'Priority Slack support',
      'Webhook delivery',
      'Team collaboration (5 seats)',
    ],
  },
  scale: {
    label: 'Scale',
    baseMonthlyUSD: 99,
    description: 'For enterprises running mission-critical automation.',
    popular: false,
    features: [
      'Unlimited workflows',
      'Unlimited events',
      '80+ enterprise connectors',
      'Custom ML anomaly models',
      'Advanced analytics + exports',
      '99.9% SLA guarantee',
      'SSO / SAML / OIDC',
      'Dedicated account manager',
      'Private VPC deployment',
      'Custom integrations',
    ],
  },
};

export const currencyMatrix = {
  USD: {
    symbol: '$',
    rate: 1,
    tariff: 1,
    locale: 'en-US',
  },
  INR: {
    symbol: '₹',
    rate: 83,
    tariff: 0.92,
    locale: 'en-IN',
  },
  EUR: {
    symbol: '€',
    rate: 0.92,
    tariff: 1.05,
    locale: 'de-DE',
  },
};

export const billingMatrix = {
  monthly: {
    label: 'Monthly',
    multiplier: 1,
    suffix: '/mo',
    badge: null,
  },
  annual: {
    label: 'Annual',
    multiplier: 12 * 0.8,
    suffix: '/yr',
    badge: 'Save 20%',
  },
};
