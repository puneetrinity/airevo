const faqs = [
  {
    question: 'What products does AI Revo Labs offer?',
    answer:
      'We build three AI products for startups: VantaHire (enterprise ATS platform), EvalMatch (AI-powered recruitment intelligence with resume parsing and bias detection), and Career LLM (personalized career guidance AI, coming soon). All products are powered by ActiveGraph KG, our knowledge graph engine (available as open source community edition and enterprise license).',
  },
  {
    question: 'How is VantaHire different from other ATS tools?',
    answer:
      "VantaHire is built specifically for startups with collaborative hiring pipelines, smart automation, and seamless ATS integration. Unlike traditional enterprise tools, we focus on speed and ease-of-use while maintaining powerful features. Plus, it's powered by our open-source ActiveGraph KG engine with semantic drift detection and multi-tenant architecture.",
  },
  {
    question: 'Can I use ActiveGraph KG in my own product?',
    answer:
      'Yes! ActiveGraph KG has two options: Community Edition (open source on GitHub for non-commercial use) and Enterprise License (for commercial deployments). It is a self-refreshing knowledge graph engine with semantic drift detection, multi-tenant RLS, and production-ready architecture. Contact hello@airevolabs.com for enterprise licensing.',
  },
  {
    question: 'Do you offer custom AI development for startups?',
    answer:
      'While our primary focus is on our products, we occasionally take on custom AI projects for startups with specific needs. We specialize in LLM fine-tuning, knowledge graphs, and vector search systems. Reach out at hello@airevolabs.com to discuss your requirements.',
  },
  {
    question: "What's the pricing for VantaHire and EvalMatch?",
    answer:
      'Both products offer startup-friendly pricing. VantaHire has a free tier to get started, and EvalMatch pricing is based on usage. Visit vantahire.com and evalmatch.app for detailed pricing, or contact us for startup plans and discounts.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-slate-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-black text-slate-900">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600">Common questions about our AI products for startups</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border-2 border-slate-200 bg-white p-6 transition-colors hover:border-brand-blue"
            >
              <h3 className="mb-3 text-xl font-bold text-slate-900">{faq.question}</h3>
              <p className="leading-relaxed text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
