import Link from 'next/link';

export function PoweredBy() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-blue-800 p-10 text-center text-white shadow-card">
          <div className="mx-auto mb-6 flex w-fit items-center gap-3">
            <div className="grid h-10 w-10 grid-cols-2 grid-rows-2 gap-1.5 opacity-90">
              <div className="rounded-full bg-brand-teal" />
              <div className="rounded-full bg-brand-blue" />
              <div className="rounded-full bg-brand-pink" />
              <div className="rounded-full bg-brand-purple" />
            </div>
            <span className="text-lg font-semibold text-blue-100">Powered by ActiveGraph KG</span>
          </div>

          <h3 className="mb-4 text-3xl font-black">The Graph Engine Behind Every Product</h3>
          <p className="mx-auto mb-4 max-w-3xl text-xl text-blue-100">
            All our products are built on ActiveGraph KG — our knowledge graph engine with semantic drift detection,
            multi-tenant architecture, and self-refreshing capabilities.
          </p>
          <p className="mx-auto mb-6 max-w-2xl text-base text-blue-200">
            Open source for community use • Enterprise license available for commercial deployments
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://github.com/puneetrinity/active-graph-kg.git"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-900 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Community Edition →
            </Link>
            <Link
              href="mailto:hello@airevolabs.com?subject=ActiveGraph KG Enterprise License"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Enterprise License →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
