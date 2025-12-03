import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="bg-white py-12">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-4xl font-black text-slate-900">Get in Touch</h2>
        <p className="mb-8 text-xl text-slate-600">Questions about our products? Want to discuss custom AI solutions?</p>
        <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">📧</span>
              <Link href="mailto:hello@airevolabs.com" className="text-2xl font-bold text-brand-blue hover:text-blue-700">
                hello@airevolabs.com
              </Link>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🌐</span>
              <Link href="https://www.airevolabs.com" className="text-xl font-bold text-slate-700 hover:text-brand-blue">
                www.airevolabs.com
              </Link>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">📍</span>
              <span className="text-xl text-slate-600">India • Serving Global Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
