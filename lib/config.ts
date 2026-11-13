/**
 * Portfolio Configuration - Centralized data management
 * Separates content from presentation logic
 */

import type {
  Project,
  Contribution,
  CareerEntry,
  Skill,
  Contact,
  PortfolioTheme,
  SeoMetadata,
} from './types'

export const SITE_CONFIG = {
  name: 'Harshit Kushwaha',
  title: 'Software Engineer & OSS Contributor',
  siteUrl: 'https://harshitt13.in',
  tagline: 'My favorite framework is understanding how things work.',
  description:
    'Software Engineer contributing to CNCF, OpenTelemetry, and open-source observability. Building cloud-native tools, AI/ML systems, and full-stack applications.',
}

export const SOCIAL_LINKS = {
  github: 'https://github.com/harshitt13',
  linkedin: 'https://linkedin.com/in/harshitt13',
  linktree: 'https://linktr.ee/harshitt13',
  instagram: 'https://www.instagram.com/harshitt.13/',
  youtube: 'https://www.youtube.com/@find.harshitt13',
  resume: 'https://github.com/harshitt13/resume/blob/main/Harshit%20Kushwaha%20Resume.pdf',
  email: 'find.harshitt13@gmail.com',
  allPRs: 'https://github.com/search?q=is%3Apr+author%3Aharshitt13+is%3Amerged&type=pullrequests',
  allRepositories: 'https://github.com/harshitt13?tab=repositories',
}

/**
 * Every profile that belongs to the same person, emitted as schema.org
 * `sameAs`. This is the main signal Google uses to merge scattered accounts
 * into one entity, so ranking for the name improves roughly in proportion to
 * how complete and accurate this list is.
 *
 * Add any other profile you actively own - X/Twitter, Dev.to, Medium,
 * Stack Overflow, Instagram, YouTube, Hashnode, Reddit, ORCID. Only list
 * accounts that are really yours and that link back here; unverifiable or
 * dead entries weaken the association rather than strengthening it.
 */
export const PROFILE_URLS: string[] = [
  SOCIAL_LINKS.github,
  SOCIAL_LINKS.linkedin,
  SOCIAL_LINKS.instagram,
  SOCIAL_LINKS.youtube,
  SOCIAL_LINKS.linktree,
]

/** The quote that /quotes exists to rank for. Deliberately not shown on the portfolio. */
export const QUOTE = {
  text: 'Hope prolongs suffering.',
  slug: '/quotes',
  datePublished: '2025-01-01',
}

/**
 * Stable schema.org node identifiers. Every page reuses these exact strings so
 * a crawler resolves the Person on /quotes and the Person on / to one node
 * instead of two lookalike entities.
 */
export const SCHEMA_IDS = {
  person: `${SITE_CONFIG.siteUrl}/#person`,
  website: `${SITE_CONFIG.siteUrl}/#website`,
}

/**
 * Mirror of the @theme block in app/globals.css, for the one consumer that
 * cannot read CSS variables: the OG image, which Satori renders outside a
 * browser. Everything else should use the Tailwind token utilities
 * (bg-term-panel, text-term-accent, ...) instead of importing this.
 */
export const THEME: PortfolioTheme = {
  base: '#0c0a08',
  surface: '#141210',
  panel: '#1b1714',
  edge: '#2c2620',
  edgeStrong: '#5a5449',
  dim: '#948c7e',
  muted: '#948c7e',
  fg: '#e9e4d8',
  accent: '#ffb648',
  accentDim: '#c98f38',
  cyan: '#7fd8e8',
}

export const PROJECTS: Project[] = [
  {
    id: 'nyxchat',
    name: 'NyxChat',
    description: 'P2P decentralized serverless encrypted messaging application',
    tech: ['Dart', 'Serverless', 'Decentralized', 'Encrypted'],
    repoLink: 'https://github.com/harshitt13/NyxChat',
    statusLabel: 'Active',
    statusLink: 'https://github.com/harshitt13/NyxChat/releases',
  },
  {
    id: 'krtrimahastah',
    name: 'Krtrimahastah',
    description: 'Open-Source, affordable and intelligent prosthetic hand for amputees',
    tech: ['ESP32', 'SinricPro', 'Multimodal', 'Robotics', 'IoT'],
    repoLink: 'https://github.com/harshitt13/Krtrimahastah',
    statusLabel: 'Demonstration',
    statusLink: 'https://youtu.be/BNZyQIecj14',
  },
  {
    id: 'meowscript',
    name: 'Meowscript',
    description: 'Cat theme based purrest programming language',
    tech: ['React', 'JavaScript', 'Node.js'],
    repoLink: 'https://github.com/harshitt13/meowscripts',
    statusLabel: 'Live',
    statusLink: 'https://meowscript.harshitt13.in/',
  },
  {
    id: 'stock-prediction',
    name: 'Stock-Market-Prediction-Model',
    description:
      'Quantitative forecasting engine. Features a PyTorch Time-Series Transformer, Bayesian architecture optimization, and dynamic Volatility-Aware (VIX) Meta-Learning',
    tech: ['Python', 'XGBoost', 'Random Forest', 'LSTM (PyTorch)', 'Time-Series Transformer'],
    repoLink: 'https://github.com/harshitt13/Stock-Market-Prediction-Model',
    statusLabel: 'Github',
    statusLink: 'https://github.com/harshitt13/Stock-Market-Prediction-Model',
  },
]

export const CONTRIBUTIONS: Contribution[] = [
  {
    org: 'MindfulSoftwareLLC/dartastic_opentelemetry',
    prs: [
      {
        number: '277',
        title: 'Implement metrics exemplars with trace correlation and sampling reservoirs',
        link: 'https://github.com/MindfulSoftwareLLC/dartastic_opentelemetry/pull/277',
      },
      {
        number: '268',
        title: 'Centralize SDK configuration and fix resource precedence and default sampling',
        link: 'https://github.com/MindfulSoftwareLLC/dartastic_opentelemetry/pull/268',
      },
      {
        number: '72',
        title: 'Implement metrics SDK environment variable configuration',
        link: 'https://github.com/MindfulSoftwareLLC/dartastic_opentelemetry/pull/72',
      },
      {
        number: '66',
        title: 'Configure BatchLogRecordProcessor through environment variables',
        link: 'https://github.com/MindfulSoftwareLLC/dartastic_opentelemetry/pull/66',
      },
      {
        number: '59',
        title: 'Implement BatchSpanProcessor environment variable support',
        link: 'https://github.com/MindfulSoftwareLLC/dartastic_opentelemetry/pull/59',
      },
    ],
  },
  {
    org: 'MindfulSoftwareLLC/dartastic_opentelemetry_api',
    prs: [
      {
        number: '113',
        title:
          'Align Metrics API callbacks, batch registration, and advisory parameters with the spec',
        link: 'https://github.com/MindfulSoftwareLLC/dartastic_opentelemetry_api/pull/113',
      },
      {
        number: '118',
        title: 'Implement context-driven span creation and explicit root span support',
        link: 'https://github.com/MindfulSoftwareLLC/dartastic_opentelemetry_api/pull/118',
      },
      {
        number: '129',
        title: 'Fix instrumentation scope attribute leaks and reuse non-recording spans',
        link: 'https://github.com/MindfulSoftwareLLC/dartastic_opentelemetry_api/pull/129',
      },
      {
        number: '124',
        title: 'Honor span recording state and correct tracer enablement checks',
        link: 'https://github.com/MindfulSoftwareLLC/dartastic_opentelemetry_api/pull/124',
      },
      {
        number: '142',
        title: 'Add random-trace-id flag support to TraceFlags',
        link: 'https://github.com/MindfulSoftwareLLC/dartastic_opentelemetry_api/pull/142',
      },
    ],
  },
  {
    org: 'open-telemetry/opentelemetry-collector-contrib',
    prs: [
      {
        number: '48782',
        title: 'Correlate asynchronous messaging spans in the service graph connector',
        link: 'https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/48782',
      },
      {
        number: '50020',
        title: 'Add the clear function to the OpenTelemetry Transformation Language',
        link: 'https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/50020',
      },
      {
        number: '49741',
        title: 'Support passing nil values to OTTL setters behind a feature gate',
        link: 'https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/49741',
      },
      {
        number: '48055',
        title: 'Add timeout, queue, and retry support to the Google Cloud Storage exporter',
        link: 'https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/48055',
      },
      {
        number: '48707',
        title: 'Add STS security token authentication to the Alibaba Cloud Log Service exporter',
        link: 'https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/48707',
      },
    ],
  },
  {
    org: 'jaegertracing/jaeger-ui',
    prs: [
      {
        number: '3987',
        title: 'Fix overlapping labels on self-referencing nodes in the DAG view',
        link: 'https://github.com/jaegertracing/jaeger-ui/pull/3987',
      },
    ],
  },
  {
    org: 'open-telemetry/opentelemetry-java-contrib',
    prs: [
      {
        number: '2887',
        title: 'fix(ibm-mq-metrics): update metric unit from microseconds to us',
        link: 'https://github.com/open-telemetry/opentelemetry-java-contrib/pull/2887',
      },
      {
        number: '2835',
        title: 'feat(ibm-mq-metrics): report queue manager uptime',
        link: 'https://github.com/open-telemetry/opentelemetry-java-contrib/pull/2835',
      },
    ],
  },
  {
    org: 'meshery/meshery',
    prs: [
      {
        number: '17759',
        title: '[Docs - New] Fix and enhance lightbox image viewer functionality',
        link: 'https://github.com/meshery/meshery/pull/17759',
      },
      {
        number: '17747',
        title: '[docs-new] Fix missing favicons by correcting paths in head.html',
        link: 'https://github.com/meshery/meshery/pull/17747',
      },
    ],
  },
  {
    org: 'meshery-extensions/kanvas-site',
    prs: [
      {
        number: '136',
        title: 'fix: resolve semantic HTML and accessibility warnings on landing page',
        link: 'https://github.com/meshery-extensions/kanvas-site/pull/136',
      },
    ],
  },
  {
    org: 'kestra-io/kestra',
    prs: [
      {
        number: '14857',
        title:
          'fix(core): use toDashboardFilterBuilder for namespace filter in ITriggers and IMetrics',
        link: 'https://github.com/kestra-io/kestra/pull/14857',
      },
    ],
  },
]

export const CAREER: CareerEntry[] = [
  {
    id: 'triager',
    role: 'Triager',
    org: 'OpenTelemetry - CNCF',
    scope: 'OSS Contributor',
    message:
      'Collaborate with project maintainers to steer the development of critical observability components, ensuring stability and performance at scale',
    start: '2026-04',
    end: null,
  },
  {
    id: 'oss-developer',
    role: 'Open Source Developer',
    org: 'Cloud Native Computing Foundation (CNCF)',
    scope: 'OSS Contributor',
    message:
      'Active open-source engineer and code reviewer contributing to high-impact distributed systems, observability tooling, and data orchestration platforms across multiple organizations',
    start: '2026-02',
    end: '2026-05',
  },
  {
    id: 'core-member',
    role: 'Core Member',
    org: 'Software Development Club, VIT Bhopal',
    scope: 'ML',
    message:
      'Collaborated with technical team to organize workshops and events, mentored peers in machine learning fundamentals',
    start: '2024-12',
    end: '2025-08',
  },
  {
    id: 'intern',
    role: 'Intern',
    org: 'CarCID',
    scope: 'Web Dev',
    message:
      'Collaborated on creating webpages for CarCID, improving SEO and user experience with modern web standards',
    start: '2025-04',
    end: '2025-06',
  },
  {
    id: 'freelance',
    role: 'Freelance',
    org: 'Outlier',
    scope: 'AI Trainer',
    message:
      'Collaborated on projects to train AI models, improving their performance and accuracy through iterative feedback loops',
    start: '2024-11',
    end: '2024-12',
  },
]

export const SKILLS: Skill[] = [
  {
    category: 'Programming Languages',
    skills: [
      'python',
      'javascript',
      'typescript',
      'c',
      'c++',
      'go',
      'java',
      'dart',
      'flutter',
      'html',
      'css',
    ],
  },
  {
    category: 'Hardware & Prototyping',
    skills: ['arduino', 'fritzing', 'kicad', 'easyeda', 'ultimaker-cura'],
  },
  {
    category: 'Machine Learning & Data Science',
    skills: [
      'tensorflow',
      'keras',
      'pytorch',
      'scikit_learn',
      'numpy',
      'pandas',
      'matplotlib',
      'plotly',
      'opencv',
      'seaborn',
    ],
  },
  {
    category: 'Web Development Frameworks',
    skills: ['react', 'nextjs', 'flask', 'fastapi'],
  },
  {
    category: 'Databases',
    skills: [
      'postgresql',
      'mysql',
      'sqlite',
      'sqlserver',
      'neo4j',
      'mongodb',
      'prisma',
      'supabase',
    ],
  },
  {
    category: 'DevOps & Environments',
    skills: ['git', 'github', 'github-actions', 'docker', 'wsl'],
  },
  {
    category: 'Cloud & Hosting Platforms',
    skills: [
      'aws',
      'gcp',
      'firebase',
      'vercel',
      'netlify',
      'render',
      'hostinger',
      'wordpress',
      'google-search-console',
    ],
  },
  {
    category: 'Testing & APIs',
    skills: ['postman', 'axe-devtools'],
  },
  {
    category: 'Design & Creativity',
    skills: ['figma', 'affinity', 'photoshop', 'canva', 'clipchamp', 'obs'],
  },
  {
    category: 'AI & LLMs',
    skills: [
      'copilot',
      'anthropic',
      'langchain',
      'huggingface',
      'google-ai',
      'google-antigravity',
      'code-rabbit',
      'codex',
      'ollama',
      'cursor',
    ],
  },
  {
    category: 'Configuration & Data Formats',
    skills: ['yaml', 'json', 'xml'],
  },
]

export const CONTACTS: Contact[] = [
  {
    label: 'email',
    value: 'find.harshitt13@gmail.com',
    href: 'mailto:find.harshitt13@gmail.com',
  },
  {
    label: 'github',
    value: 'github.com/harshitt13',
    href: SOCIAL_LINKS.github,
    isIdentity: true,
  },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/harshitt13',
    href: SOCIAL_LINKS.linkedin,
    isIdentity: true,
  },
]

/**
 * The site renders a single page, so there is exactly one document to describe.
 * Per-section entries used to live here but nothing could ever consume them -
 * anchors are not separate documents to a crawler.
 */
export const HOME_SEO: SeoMetadata = {
  title: 'Harshit Kushwaha | Software Engineer & OSS Contributor',
  description: SITE_CONFIG.description,
  keywords: [
    'Harshit Kushwaha',
    'harshitt13',
    'Harshit Kushwaha software engineer',
    'Harshit Kushwaha portfolio',
    'Harshit Kushwaha OpenTelemetry',
    'software engineer',
    'open source',
    'observability',
    'CNCF',
    'OpenTelemetry',
  ],
}
