import { Hero, PluginGrid } from '@/components';
import { getPhase1Plugins, getPhase2Plugins } from '@/lib/plugins';

export default function HomePage() {
  const phase1 = getPhase1Plugins();
  const phase2 = getPhase2Plugins();

  return (
    <>
      <Hero variant="A" />
      
      <PluginGrid
        plugins={phase1}
        title="Our Plugin Suite"
        subtitle="Professional audio tools designed for modern music production"
      />
      
      {phase2.length > 0 && (
        <PluginGrid
          plugins={phase2}
          title="Coming Soon"
          subtitle="More powerful tools on the way"
        />
      )}
      
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-900 to-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to level up your mixes?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Try all our plugins free for 14 days. No credit card required.
          </p>
          <div className="mt-10">
            <a
              href="/download"
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-purple-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
            >
              Start Your Free Trial
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
