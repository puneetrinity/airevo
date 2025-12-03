import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { StructuredData } from '@/components/seo/StructuredData';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.airevolabs.com'),
  alternates: {
    canonical: '/',
  },
  title: 'AI Revo Labs - AI Products for Startups | VantaHire, EvalMatch & Career LLM | India',
  description:
    'AI product company for startups. VantaHire ATS, EvalMatch hiring platform, Career Guidance LLM — all powered by ActiveGraph KG. 4-8 weeks from idea to MVP.',
  openGraph: {
    type: 'website',
    url: 'https://www.airevolabs.com/',
    title: 'AI Revo Labs - AI Products for Startups',
    description:
      'AI product company for startups. VantaHire ATS, EvalMatch hiring platform, Career Guidance LLM. Built on ActiveGraph KG (dual license).',
    locale: 'en_IN',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Revo Labs - AI Products for Startups',
    description:
      'AI product company for startups. VantaHire ATS, EvalMatch hiring platform, Career Guidance LLM. Open-source powered.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: ['/favicon.svg', '/favicon.ico'],
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    ICBM: '20.5937,78.9629',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
