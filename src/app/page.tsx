'use client';

import Link from 'next/link';
import { PluginGrid, LatestBlog } from '@/components';
import { getPhase1Plugins, getPhase2Plugins } from '@/lib/plugins';
import { CheckIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

const features = [
  'Professional-grade sound without studio prices',
  'Intuitive interfaces that get out of your way',
  'CPU-efficient for smooth workflow',
  'Built by producers, for producers',
];

const latestYouTube = [
  { title: 'How to Use EQ to Fix Muddy Mixes', duration: '12:34' },
  { title: 'Compression Masterclass for Beginners', duration: '18:22' },
  { title: 'Amp Spot EQ Plugin - Full Walkthrough', duration: '15:45' },
];

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const phase1 = getPhase1Plugins();
  const phase2 = getPhase2Plugins();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 py-24 sm:py-32">
        {/* VU meter aesthetic background */}
        <div className="absolute inset-0 opacity-10">
          <div className="flex h-full justify-around items-center">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-green-500 via-yellow-500 to-red-500 rounded-full"
                style={{
                  height: `${30 + Math.random() * 50}%`,
                  opacity: 0.2 + Math.random() * 0.5,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Plugins That <span className="text-orange-200">Punch Above Their Weight</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-orange-100 sm:text-xl">
              Pro-quality audio tools that won't make your wallet cry. From EQ and compression to saturation and analysis, get studio-quality tools without the studio price tag.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
              <Link
                href="/plugins"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg transition-all hover:bg-orange-50 hover:shadow-xl"
              >
                Explore Plugins
              </Link>
              <Link
                href="/youtube"
                className="text-lg font-semibold leading-6 text-white transition-colors hover:text-orange-200"
              >
                Watch Tutorials <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Amp Spot Section */}
      <section className="py-24 bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What is Amp Spot?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              We're a team of passionate audio engineers and producers building tools we actually want to use.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Amp Spot was born from a simple frustration: great sounding plugins shouldn't cost a fortune. We believe every producer deserves access to professional-quality tools, whether you're working in a bedroom studio or a world-class facility.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our plugins are designed with one goal in mind: help you make better music, faster. No complicated workflows, no endless tweaking—just great sound that gets out of your way and lets you be creative.
              </p>
            </div>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckIcon className="h-5 w-5 text-orange-500" aria-hidden="true" />
                  </div>
                  <span className="text-lg text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plugin Grid Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PluginGrid
            plugins={phase1}
            title="Our Plugin Suite"
            subtitle="Professional audio tools designed for modern music production"
          />
        </div>
      </section>

      {phase2.length > 0 && (
        <section className="py-24 bg-slate-950/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <PluginGrid
              plugins={phase2}
              title="Coming Soon"
              subtitle="More powerful tools on the way"
            />
          </div>
        </section>
      )}

      {/* Latest from the Blog */}
      <LatestBlog />

      {/* Latest YouTube Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-full bg-red-500/20 p-2">
                <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">Latest on YouTube</h2>
            </div>
            <p className="text-lg text-gray-400">
              Watch tutorials, walkthroughs, and mixing tips on our YouTube channel
            </p>
          </div>

          <ul className="space-y-4">
            {latestYouTube.map((video, i) => (
              <li key={i}>
                <a href="https://youtube.com/@ampspot" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm hover:border-red-500/50 transition-all">
                  <p className="text-white font-medium group-hover:text-red-400 transition-colors">
                    {video.title}
                  </p>
                  <span className="text-sm text-gray-500 mt-2 inline-block">{video.duration}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <a
              href="https://youtube.com/@ampspot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-red-400 hover:text-red-300"
            >
              Watch on YouTube
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-orange-600 to-red-800 relative overflow-hidden">
        {/* VU meter aesthetic background */}
        <div className="absolute inset-0 opacity-10">
          <div className="flex h-full justify-around items-center">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-green-500 via-yellow-500 to-red-500 rounded-full"
                style={{
                  height: `${30 + Math.random() * 50}%`,
                  opacity: 0.2 + Math.random() * 0.5,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mb-6 backdrop-blur-sm">
            <EnvelopeIcon className="h-5 w-5 text-orange-200" />
            <span className="text-sm font-medium text-orange-200">Newsletter</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Production Tips Delivered
          </h2>
          <p className="mt-4 text-lg text-orange-100">
            Join our newsletter for mixing tips, plugin updates, and exclusive content. No spam, just value.
          </p>

          <form onSubmit={handleSubscribe} className="mt-8 sm:flex sm:max-w-lg sm:mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-full border-0 px-6 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 sm:ml-4 flex-none rounded-full bg-white px-6 py-4 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="mt-4 text-sm text-green-200">
              ✓ Thanks for subscribing! Check your inbox for confirmation.
            </p>
          )}

          <p className="mt-4 text-xs text-orange-200">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to level up your mixes?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Try all our plugins free for 14 days. No credit card required.
          </p>
          <div className="mt-10">
            <Link
              href="/download"
              className="rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-500/40"
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
