import Link from 'next/link';

type Product = {
  name: string;
  title: string;
  description: string;
  href: string;
  gradient: string;
  border: string;
  emoji: string;
  accent: string;
  ctaLabel: string;
};

const products: Product[] = [
  {
    name: 'VantaHire',
    title: 'Enterprise ATS Platform',
    description:
      'Complete job lifecycle management with ATS integration, collaborative hiring pipelines, and smart automation for startup teams.',
    href: 'https://vantahire.com/recruiter-auth',
    gradient: 'from-purple-50 to-purple-100',
    border: 'border-purple-500',
    emoji: '🏢',
    accent: 'text-purple-700',
    ctaLabel: 'Try VantaHire Free →',
  },
  {
    name: 'EvalMatch',
    title: 'AI Recruitment Intelligence',
    description:
      'Smart job-candidate matching with AI-powered resume parsing, bias detection, and intelligent screening for better hires.',
    href: 'https://evalmatch.app',
    gradient: 'from-orange-50 to-orange-100',
    border: 'border-orange-500',
    emoji: '🤖',
    accent: 'text-orange-700',
    ctaLabel: 'Explore EvalMatch →',
  },
  {
    name: 'Career LLM',
    title: 'AI Career Guidance • Coming Soon',
    description:
      'Fine-tuned Qwen 2.5 7B for personalized career advice with India salary intelligence and job market insights.',
    href: 'mailto:hello@airevolabs.com?subject=Career LLM Early Access',
    gradient: 'from-green-50 to-green-100',
    border: 'border-green-500',
    emoji: '🧠',
    accent: 'text-green-700',
    ctaLabel: 'Request Early Access →',
  },
];

export function Products() {
  return (
    <section id="products" className="relative z-10 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-black text-slate-900">Our AI Products</h2>
          <p className="text-xl text-slate-600">Production-ready tools built for startup hiring & career guidance</p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className={`flex h-full flex-col rounded-3xl border-4 ${product.border} bg-gradient-to-br ${product.gradient} p-8 shadow-lg transition-all hover:shadow-2xl`}
            >
              <div className="mb-4 text-5xl">{product.emoji}</div>
              <h3 className="mb-3 text-2xl font-black text-slate-900">{product.name}</h3>
              <p className={`mb-3 text-lg font-bold ${product.accent}`}>{product.title}</p>
              <p className="mb-6 flex-grow leading-relaxed text-slate-700">{product.description}</p>
              <Link
                href={product.href}
                target={product.href.startsWith('http') ? '_blank' : undefined}
                className="inline-block self-start rounded-xl bg-slate-900 px-6 py-3 font-bold text-white shadow transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                {product.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
