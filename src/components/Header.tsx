'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { CurrencySelector } from './CurrencySelector';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Plugins', href: '/plugins' },
  { name: 'Social Media', href: '/social' },
  { name: 'Blog', href: '/blog' },
  { name: 'Pricing', href: '/pricing' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image 
              src="/logo.svg" 
              alt="Amp Spot Logo" 
              width={32} 
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-white">Amp Spot</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white cursor-pointer"
            onClick={() => {
              console.log('Menu button clicked');
              setMobileMenuOpen(true);
            }}
            aria-label="Open main menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6 pointer-events-none" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <CurrencySelector />
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/download"
            className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 transition-colors"
          >
            Download
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-800">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <Image 
                  src="/logo.svg" 
                  alt="Amp Spot Logo" 
                  width={32} 
                  height={32}
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold text-white">Amp Spot</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-800">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-slate-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-2">
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:bg-slate-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/download"
                    className="-mx-3 block rounded-lg bg-purple-600 px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-purple-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
