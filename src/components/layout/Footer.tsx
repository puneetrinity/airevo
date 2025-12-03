import Link from 'next/link';
import { AirevoLogo } from '@/components/brand/AirevoLogo';

const footerNav = [
  { href: '#products', label: 'Products' },
  { href: '#work', label: 'Showcase' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t-4 border-slate-800 bg-slate-900 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <AirevoLogo className="mb-4 h-10 w-auto" variant="white-text" />
          <div className="font-bold">© 2025 AI Revo Labs. All rights reserved.</div>
          <div className="mt-1 text-sm text-slate-400">AI Products for Startups. Open Source Powered.</div>
        </div>

        <nav className="flex items-center gap-6 text-sm font-bold">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
