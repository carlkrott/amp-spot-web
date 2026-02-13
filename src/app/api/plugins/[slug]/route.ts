import { NextResponse } from 'next/server';
import { getPluginBySlug } from '@/lib/plugins';
import { getOrSet } from '@/lib/redis';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { slug } = await params;

  try {
    // Try to get from cache first (1 hour TTL)
    const cacheKey = `plugin:${slug}`;
    
    const plugin = await getOrSet(
      cacheKey,
      async () => {
        return getPluginBySlug(slug);
      },
      3600 // 1 hour cache
    );

    if (!plugin) {
      return NextResponse.json(
        {
          success: false,
          error: 'Plugin not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: plugin,
    });
  } catch {
    // Fallback to direct lookup if Redis is unavailable
    const plugin = getPluginBySlug(slug);

    if (!plugin) {
      return NextResponse.json(
        {
          success: false,
          error: 'Plugin not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: plugin,
      cached: false,
    });
  }
}
