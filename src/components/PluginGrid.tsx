import { Plugin } from '@/types/plugin';
import { PluginCard } from './PluginCard';

interface PluginGridProps {
  plugins: Plugin[];
  title?: string;
  subtitle?: string;
}

export function PluginGrid({ plugins, title, subtitle }: PluginGridProps) {
  return (
    <section id="plugins" className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center mb-16">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plugins.map((plugin) => (
            <PluginCard key={plugin.slug} plugin={plugin} />
          ))}
        </div>
      </div>
    </section>
  );
}
