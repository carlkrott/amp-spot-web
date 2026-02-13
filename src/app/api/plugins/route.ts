import { NextResponse } from 'next/server';
import { plugins } from '@/lib/plugins';
import { getOrSet } from '@/lib/redis';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const phase = searchParams.get('phase');

  try {
    // Try to get from cache first (1 hour TTL)
    const cacheKey = phase ? `plugins:phase:${phase}` : 'plugins:all';
    
    const data = await getOrSet(
      cacheKey,
      async () => {
        let filteredPlugins = plugins;
        
        if (phase) {
          const phaseNum = parseInt(phase, 10);
          if (!isNaN(phaseNum)) {
            filteredPlugins = plugins.filter((p) => p.phase === phaseNum);
          }
        }
        
        return filteredPlugins;
      },
      3600 // 1 hour cache
    );

    return NextResponse.json({
      success: true,
      data,
      count: data.length,
    });
  } catch {
    // Fallback to direct data if Redis is unavailable
    let filteredPlugins = plugins;
    
    if (phase) {
      const phaseNum = parseInt(phase, 10);
      if (!isNaN(phaseNum)) {
        filteredPlugins = plugins.filter((p) => p.phase === phaseNum);
      }
    }

    return NextResponse.json({
      success: true,
      data: filteredPlugins,
      count: filteredPlugins.length,
      cached: false,
    });
  }
}
