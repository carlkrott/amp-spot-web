import type { Metadata } from 'next';
import { PluginGrid } from '@/components';
import { getPhase1Plugins, getPhase2Plugins } from '@/lib/plugins';

export const metadata: Metadata = {
  title: 'Plugins',
  description: 'Explore our suite of professional audio plugins. From EQ and compression to saturation and analysis, find the perfect tools for your music production workflow.',
  openGraph: {
    title: 'Amp Spot Plugins - Professional Audio Tools',
    description: 'Explore our suite of professional audio plugins. From EQ and compression to saturation and analysis.',
    images: ['/images/og/plugins.png'],
  },
};

export default function PluginsPage() {
  const phase1 = getPhase1Plugins();
  const phase2 = getPhase2Plugins();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Plugins
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Professional-grade audio tools designed for everyone from bedroom producers to studio pros.
            </p>
          </div>
        </div>
      </section>

      <PluginGrid
        plugins={phase1}
        title="Phase 1 - Available Now"
        subtitle="Our core suite of essential mixing and mastering tools"
      />

      {phase2.length > 0 && (
        <PluginGrid
          plugins={phase2}
          title="Phase 2 - Coming Soon"
          subtitle="More powerful tools on the horizon"
        />
      )}
    </div>
  );
}
