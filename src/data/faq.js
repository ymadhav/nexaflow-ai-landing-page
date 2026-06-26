export const faqItems = [
  {
    id: 1,
    question: 'Can I connect multiple data sources?',
    answer:
      'Yes. NexaFlow AI supports 80+ native connectors including REST APIs, databases (PostgreSQL, MySQL, BigQuery), cloud storage (S3, GCS), SaaS platforms (Salesforce, HubSpot, Stripe), and real-time streams (Kafka, Kinesis). All tiers include multi-source ingestion; the number of simultaneous active connectors scales with your plan.',
  },
  {
    id: 2,
    question: 'How does AI automation work?',
    answer:
      'NexaFlow uses a proprietary orchestration engine backed by trained ML models. When you define a trigger (an event, a schedule, or an anomaly detection signal), our AI agents evaluate business context, resolve dependencies, and execute the appropriate workflow steps—retrying on failure, logging every action, and notifying your team when intervention is needed.',
  },
  {
    id: 3,
    question: 'Is pricing calculated dynamically?',
    answer:
      'Absolutely. Our pricing UI computes final prices in real time using a multi-dimensional matrix that accounts for the base plan price, your selected currency (USD, INR, or EUR), current exchange rates, regional tariffs, and your billing cycle (monthly or annual). Switching to annual billing automatically applies a 20% discount across all tiers.',
  },
  {
    id: 4,
    question: 'Is my data secure?',
    answer:
      'Security is foundational at NexaFlow. We are SOC 2 Type II certified and GDPR/HIPAA compliant. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We offer SSO via SAML and OIDC, role-based access controls, field-level data masking, and full audit trails. Enterprise plans include private VPC deployment options so your data never leaves your cloud environment.',
  },
  {
    id: 5,
    question: 'Can I deploy this for enterprise teams?',
    answer:
      'Yes. Our Scale plan is purpose-built for enterprise deployments. It includes a dedicated account manager, custom onboarding, 99.9% SLA with financial guarantees, private VPC deployment, priority engineering support, and the ability to add unlimited team seats. We also support multi-region deployments and custom data residency requirements.',
  },
];
