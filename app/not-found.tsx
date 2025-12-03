import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-gradient-to-b from-white via-slate-50/50 to-white px-4 py-20 text-center">
        <h1 className="mb-4 text-8xl font-black text-slate-900">404</h1>
        <h2 className="mb-6 text-3xl font-bold text-slate-700">Page Not Found</h2>
        <p className="mb-10 max-w-md text-lg text-slate-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-2xl bg-brand-blue px-8 py-4 text-lg font-bold text-white shadow transition-transform hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
          >
            Go Home
          </Link>
          <Link
            href="#products"
            className="rounded-2xl bg-brand-pink px-8 py-4 text-lg font-bold text-white shadow transition-transform hover:scale-105 hover:bg-pink-700 hover:shadow-xl"
          >
            View Products
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
