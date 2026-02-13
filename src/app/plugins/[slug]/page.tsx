import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { plugins, getPluginBySlug } from '@/lib/plugins';
import { PluginFeatures } from '@/components';

interface PluginPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return plugins.map((plugin) => ({
    slug: plugin.slug,
  }));
}

export async function generateMetadata({ params }: PluginPageProps): Promise<Metadata> {
  const { slug } = await params;
  const plugin = getPluginBySlug(slug);

  if (!plugin) {
    return {
      title: 'Plugin Not Found',
    };
  }

  return {
    title: plugin.metaTitle,
    description: plugin.metaDescription,
    openGraph: {
      title: plugin.metaTitle,
      description: `${plugin.description} Download your free trial and start mixing better today.`,
      images: [plugin.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: plugin.metaTitle,
      description: plugin.metaDescription,
      images: [plugin.ogImage],
    },
  };
}

export default async function PluginPage({ params }: PluginPageProps) {
  const { slug } = await params;
  const plugin = getPluginBySlug(slug);

  if (!plugin) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-600">/</li>
              <li>
                <Link href="/plugins" className="text-gray-400 hover:text-white transition-colors">
                  Plugins
                </Link>
              </li>
              <li className="text-gray-600">/</li>
              <li className="text-purple-400">{plugin.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div>
              {plugin.phase === 2 && (
                <span className="mb-4 inline-flex items-center rounded-full bg-amber-500/20 px-4 py-1 text-sm font-medium text-amber-400">
                  Coming Soon
                </span>
              )}
              
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {plugin.title}
              </h1>
              
              <p className="mt-4 text-xl text-purple-400 font-medium">
                {plugin.tagline}
              </p>
              
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {plugin.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {plugin.phase === 1 ? (
                  <>
                    <Link
                      href="/download"
                      className="rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:bg-purple-500 hover:shadow-xl"
                    >
                      Try for Free
                    </Link>
                    <Link
                      href="/pricing"
                      className="rounded-full border border-gray-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-purple-500 hover:bg-purple-500/10"
                    >
                      View Pricing
                    </Link>
                  </>
                ) : (
                  <button
                    className="rounded-full bg-slate-700 px-8 py-4 text-lg font-semibold text-gray-300 cursor-not-allowed"
                    disabled
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>

            {/* Plugin Preview Placeholder */}
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎛️</div>
                  <p className="text-gray-500">Plugin UI Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <PluginFeatures features={plugin.features} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900/50 to-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to try {plugin.title}?
          </h2>
          <p className="mt-4 text-gray-300">
            Download your free trial and start mixing better today.
          </p>
          {plugin.phase === 1 && (
            <div className="mt-8">
              <Link
                href="/download"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-purple-900 shadow-lg transition-all hover:bg-gray-100"
              >
                Download Free Trial
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
