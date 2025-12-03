'use client';

import Link from 'next/link';

const stats = [
  { label: 'AI Products Live', value: '3', bg: 'bg-brand-teal' },
  { label: 'Candidates Evaluated', value: '10K+', bg: 'bg-brand-blue' },
  { label: 'Startups Hiring Smarter', value: '250+', bg: 'bg-brand-pink' },
  { label: 'Open Source Core', value: '100%', bg: 'bg-brand-orange' },
];

export function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white pb-32 pt-20">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-brand-teal px-5 py-2.5 text-sm font-bold text-white">
            ⚡ AI Products for Startups • India
          </div>

          <h1 className="mb-8 text-5xl font-black leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
            AI Products Built
            <br />
            <span className="text-brand-blue">For</span> <span className="text-brand-pink">Startups</span>
          </h1>

          <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-slate-600">
            Powered by <span className="font-semibold text-slate-800">Context-First</span> Intelligence. From Retrieval
            Augmented Recruitment to Career Graphs, we build the atomic blocks of the future.
          </p>

          <div className="mb-16 flex flex-wrap justify-center gap-4">
            <Link
              href="#products"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-pink px-8 py-4 text-lg font-bold text-white shadow transition-transform hover:scale-105 hover:bg-pink-700 hover:shadow-xl"
            >
              Explore Our Products →
            </Link>
            <Link
              href="https://vantahire.com/recruiter-auth"
              target="_blank"
              className="rounded-2xl bg-brand-violet px-8 py-4 text-lg font-bold text-white shadow transition-transform hover:scale-105 hover:bg-violet-700 hover:shadow-xl"
            >
              Try VantaHire Free
            </Link>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`${stat.bg} rounded-2xl p-6 text-center text-white shadow-lg transition-transform hover:scale-105`}
              >
                <div className="mb-2 text-4xl font-black">{stat.value}</div>
                <div className="text-sm font-bold opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-10 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-violet/30 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-brand-pink/30 to-brand-orange/30 blur-3xl" />
      </div>
    </section>
  );
}
