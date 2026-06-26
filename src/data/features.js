export const features = [
  {
    id: 0,
    title: 'Data Ingestion Mesh',
    icon: '/icons/cube-16-solid.svg',
    iconAlt: 'Data ingestion cube icon',
    tag: 'Ingestion',
    description:
      'Unified ingestion layer that pulls structured and unstructured data from any source—REST APIs, webhooks, file systems, databases—and normalizes it into a consistent schema in real time.',
    detail:
      'Supports 80+ connectors including Kafka, S3, PostgreSQL, BigQuery, Salesforce, and custom REST endpoints. Auto-schema detection reduces manual mapping by 90%.',
    span: 'large', // col-span-2 on desktop
  },
  {
    id: 1,
    title: 'Workflow Orchestration',
    icon: '/icons/cog-8-tooth.svg',
    iconAlt: 'Workflow orchestration gear icon',
    tag: 'Automation',
    description:
      'Design, deploy, and monitor multi-step automation workflows with a declarative YAML-based engine. Conditional branching, retry logic, and parallel execution built in.',
    detail:
      'Visual DAG builder for non-engineers. Built-in idempotency guards, dead-letter queues, and audit logs for every workflow run.',
    span: 'normal',
  },
  {
    id: 2,
    title: 'AI Anomaly Detection',
    icon: '/icons/search.svg',
    iconAlt: 'AI anomaly detection search icon',
    tag: 'Intelligence',
    description:
      'Proprietary ML models continuously scan your data streams for statistical deviations, pattern breaks, and emerging anomalies—before they become incidents.',
    detail:
      'Adaptive thresholds learn your baseline over time. P99 latency under 200ms. Integrates with PagerDuty, Slack, and incident management tools.',
    span: 'normal',
  },
  {
    id: 3,
    title: 'Real-Time Analytics',
    icon: '/icons/chart-pie.svg',
    iconAlt: 'Real-time analytics pie chart icon',
    tag: 'Analytics',
    description:
      'Live dashboards powered by sub-second query execution over streaming data. Slice by dimension, drill into events, and share read-only views across teams.',
    detail:
      'Columnar storage engine handles 1M+ events/second. Export to any BI tool via JDBC/ODBC. Built-in alerting on metric thresholds.',
    span: 'large',
  },
  {
    id: 4,
    title: 'Secure Enterprise Controls',
    icon: '/icons/arrow-path.svg',
    iconAlt: 'Enterprise security controls sync icon',
    tag: 'Security',
    description:
      'SOC 2 Type II compliant. Role-based access control, data masking, end-to-end encryption at rest and in transit, plus full audit trails for compliance.',
    detail:
      'SSO via SAML/OIDC. Private VPC deployment options. GDPR, HIPAA, and CCPA tooling included. 99.9% SLA with dedicated support.',
    span: 'normal',
  },
  {
    id: 5,
    title: 'Integrations & APIs',
    icon: '/icons/link-solid.svg',
    iconAlt: 'Integrations and API link icon',
    tag: 'Integrations',
    description:
      'First-class REST and GraphQL APIs, webhook delivery, and native SDKs for Python, Node.js, and Go. Embed NexaFlow into any workflow or product in minutes.',
    detail:
      '12+ certified enterprise integrations. Zapier and Make.com connectors available. Postman collection and OpenAPI 3.0 spec included.',
    span: 'normal',
  },
];
