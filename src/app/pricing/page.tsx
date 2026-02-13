import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/20/solid';

export const metadata = {
  title: 'Pricing | Amp Spot',
  description: 'Choose the perfect plan for your production needs. Free trials available, affordable monthly plans, or save with lifetime access.',
};

const features = {
  free: [
    'Demo versions of all plugins',
    'Full feature access for 14 days',
    'No credit card required',
    'Basic preset library access',
    'Community forum access',
  ],
  premium: [
    'Full access to all plugins',
    'Unlimited presets and sounds',
    'Priority customer support',
    'Exclusive tutorials and content',
    'Early access to new features',
    'Commercial use license',
    'Free updates for 1 year',
  ],
  lifetime: [
    'Everything in Premium',
    'Lifetime access to all plugins',
    'Lifetime updates included',
    'Priority email support',
    'Exclusive beta access',
    'Commercial use license forever',
  ],
};

const faqs = [
  {
    question: 'Can I use plugins commercially with the free tier?',
    answer: 'The free tier is for evaluation purposes only. Commercial use requires a Premium or Lifetime license.',
  },
  {
    question: 'What formats are included?',
    answer: 'All plans include VST3, AU, and AAX formats for both Windows and macOS (Apple Silicon and Intel).',
  },
  {
    question: 'Do I need to renew my subscription?',
    answer: 'Premium subscriptions are month-to-month with no long-term commitment. Cancel anytime. Lifetime is a one-time purchase.',
  },
  {
    question: 'What happens if I cancel my subscription?',
    answer: 'Your plugins will continue to work until the end of your billing period. After that, you\'ll need to resubscribe to use them.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes! We offer a 14-day money-back guarantee on all paid plans. If you\'re not satisfied, we\'ll refund your payment.',
  },
  {
    question: 'Can I transfer my license?',
    answer: 'Lifetime licenses can be transferred once. Subscription licenses cannot be transferred.',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 py-24 sm:py-32">
        {/* VU meter aesthetic background */}
        <div className="absolute inset-0 opacity-10">
          <div className="flex h-full justify-around items-center">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-green-500 via-yellow-500 to-red-500 rounded-full"
                style={{
                  height: `${40 + Math.random() * 40}%`,
                  opacity: 0.3 + Math.random() * 0.7,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-orange-100 sm:text-xl">
              Professional audio plugins at prices that make sense. Start with a free trial, upgrade when you're ready.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Free Tier */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-800/50 border border-slate-700/50 p-8 backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Free</h3>
                <p className="mt-2 text-sm text-gray-400">Try everything before you buy</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-gray-400">/forever</span>
              </div>
              <ul role="list" className="space-y-4 mb-8">
                {features.free.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="ml-3 text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/download"
                className="block w-full rounded-full border border-orange-500 px-6 py-3 text-center text-sm font-semibold text-orange-400 transition-all hover:bg-orange-500 hover:text-white"
              >
                Download Free Trial
              </Link>
            </div>

            {/* Premium Tier */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 to-orange-700 p-8 shadow-2xl shadow-orange-500/20">
              <div className="absolute top-0 right-0 -mt-2 -mr-2">
                <span className="inline-flex items-center rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900">
                  MOST POPULAR
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Premium</h3>
                <p className="mt-2 text-sm text-orange-100">Everything you need to create</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$14.99</span>
                <span className="text-orange-100">/month</span>
              </div>
              <ul role="list" className="space-y-4 mb-8">
                {features.premium.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-white flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="ml-3 text-sm text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/download"
                className="block w-full rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-orange-600 transition-all hover:bg-orange-50"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Lifetime Tier */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-800/50 border border-slate-700/50 p-8 backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Lifetime</h3>
                <p className="mt-2 text-sm text-gray-400">One payment, forever access</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$199</span>
                <span className="text-gray-400">/one-time</span>
              </div>
              <ul role="list" className="space-y-4 mb-8">
                {features.lifetime.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="ml-3 text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/download"
                className="block w-full rounded-full border border-orange-500 px-6 py-3 text-center text-sm font-semibold text-orange-400 transition-all hover:bg-orange-500 hover:text-white"
              >
                Get Lifetime Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-slate-950/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 text-left">
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <svg
                    className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-red-800 py-16 sm:py-24">
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
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Level Up Your Mixes?
          </h2>
          <p className="mt-4 text-lg text-orange-100">
            Start with our free 14-day trial. No credit card required. Your future self will thank you.
          </p>
          <div className="mt-8">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg hover:bg-orange-50 transition-all"
            >
              Start Your Free Trial
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <p className="mt-4 text-sm text-orange-200">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
