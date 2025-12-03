import Link from 'next/link';

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900 py-12">
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8">
        <h2 className="mb-6 text-5xl font-black">Ready to Hire Smarter?</h2>
        <p className="mb-10 text-2xl opacity-90">Join 250+ startups using our AI products</p>
        <Link
          href="https://vantahire.com/recruiter-auth"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-xl font-black text-brand-blue transition-all hover:scale-110 hover:shadow-2xl"
        >
          Try VantaHire Free →
        </Link>
      </div>
    </section>
  );
}
