'use client';

import Link from 'next/link';
import { AnimatedMeterBridge } from './AnimatedMeterBridge';

interface HeroProps {
  variant?: 'A' | 'B' | 'C' | 'D' | 'E';
}

const heroContent = {
  A: {
    headline: 'Plugins That Punch Above Their Weight',
    subheading: "Pro-quality audio tools that won't make your wallet cry. Seriously.",
    cta: 'Try for Free',
  },
  B: {
    headline: 'Your Mix Deserves Better Than Stock Plugins',
    subheading: 'Stop fighting your DAW. Start finishing tracks.',
    cta: 'Get Started Free',
  },
  C: {
    headline: 'Great Sound, Great Price. No BS.',
    subheading: 'Professional-grade audio plugins for everyone from bedroom producers to studio pros.',
    cta: 'Download Now',
  },
  D: {
    headline: 'Audio Plugins That Actually Sound Good',
    subheading: 'No snake oil. No subscription scams. Just plugins that work.',
    cta: 'Start Mixing',
  },
  E: {
    headline: 'From Bedroom to Billboard',
    subheading: 'The only plugins you need to take your mixes from "meh" to "damn."',
    cta: 'Try Free Now',
  },
};

export function Hero({ variant = 'A' }: HeroProps) {
  const content = heroContent[variant];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 sm:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.2),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* SSL-style LED Meter Bridge */}
        <div className="flex justify-center mb-8">
          <AnimatedMeterBridge />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {content.headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
            {content.subheading}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
            <Link
              href="/plugins"
              className="rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              {content.cta}
            </Link>
            <Link
              href="#plugins"
              className="text-lg font-semibold leading-6 text-gray-300 transition-colors hover:text-white"
            >
              Explore plugins <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
