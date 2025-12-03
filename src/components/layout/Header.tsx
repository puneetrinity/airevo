'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AirevoLogo } from '@/components/brand/AirevoLogo';

const navItems = [
  { href: '#products', label: 'Products' },
  { href: '#work', label: 'Showcase' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Airevo Labs home">
          <AirevoLogo className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`${pathname || '/'}${item.href}`}
              className="text-base font-semibold text-slate-700 transition-colors hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://vantahire.com/recruiter-auth"
          target="_blank"
          className="hidden items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-white shadow hover:bg-blue-700 hover:shadow-lg md:inline-flex"
        >
          Try VantaHire Free
        </Link>
      </div>
    </header>
  );
}
