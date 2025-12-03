export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'AI Revo Labs',
        url: 'https://www.airevolabs.com',
        logo: 'https://www.airevolabs.com/airevo-logo.svg',
        description:
          'AI product company building VantaHire ATS, EvalMatch, and Career LLM — powered by ActiveGraph KG knowledge graph engine.',
        email: 'hello@airevolabs.com',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
          addressLocality: 'India',
        },
        sameAs: [
          'https://www.linkedin.com/company/ai-revo-labs',
          'https://github.com/puneetrinity',
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'VantaHire',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Enterprise ATS platform for startups with collaborative hiring pipelines and smart automation.',
        url: 'https://vantahire.com',
        creator: {
          '@type': 'Organization',
          name: 'AI Revo Labs',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'EvalMatch',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI recruitment intelligence with job-candidate matching, resume parsing, and bias detection.',
        url: 'https://evalmatch.app',
        creator: {
          '@type': 'Organization',
          name: 'AI Revo Labs',
        },
      },
      {
        '@type': 'SoftwareSourceCode',
        name: 'ActiveGraph KG',
        codeRepository: 'https://github.com/puneetrinity/active-graph-kg',
        url: 'https://puneetrinity.github.io/active-graph-kg/',
        programmingLanguage: 'Python',
        description:
          'Knowledge graph engine with semantic drift detection, multi-tenant RLS, and self-refreshing capabilities. Open source community edition; enterprise license available.',
        license: 'Dual License: Community / Commercial',
        creator: {
          '@type': 'Organization',
          name: 'AI Revo Labs',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
