import Link from 'next/link';
import { Plugin } from '@/types/plugin';

interface PluginCardProps {
  plugin: Plugin;
}

export function PluginCard({ plugin }: PluginCardProps) {
  return (
    <Link
      href={`/plugins/${plugin.slug}`}
      className="group relative overflow-hidden rounded-2xl bg-slate-800/50 p-6 backdrop-blur-sm transition-all hover:bg-slate-800/70 hover:shadow-xl hover:shadow-purple-500/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      
      <div className="relative">
        {plugin.phase === 2 && (
          <span className="mb-3 inline-flex items-center rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400">
            Coming Soon
          </span>
        )}
        
        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
          {plugin.title}
        </h3>
        
        <p className="mt-2 text-sm font-medium text-purple-400">
          {plugin.tagline}
        </p>
        
        <p className="mt-4 text-gray-400 line-clamp-3">
          {plugin.description}
        </p>
        
        <div className="mt-6 flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300">
          Learn more
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
