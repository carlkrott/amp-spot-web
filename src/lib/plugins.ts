import { Plugin } from '@/types/plugin';

// Our REAL plugins in development - based on vst/ directory
export const plugins: Plugin[] = [
  {
    slug: 'eq',
    title: 'Amp Spot EQ',
    tagline: 'Surgical precision meets musical character.',
    description: 'Our 7-band parametric EQ combines digital precision with analog warmth. Shape your sounds with transparent surgical cuts or add character with tube and transformer emulations. Whether you\'re carving space in a dense mix or adding final polish, Amp Spot EQ handles it all.',
    features: [
      '7-band parametric EQ with multiple filter types per band',
      'Analog mode with tube and transformer saturation options',
      'Real-time spectrum analyzer overlay',
      'Mid/side processing for stereo imaging',
      'Low CPU usage with NIH-plug Rust engine',
    ],
    phase: 1,
    status: 'coming-soon',
    metaTitle: 'Amp Spot EQ - 7-Band Parametric EQ Plugin',
    metaDescription: 'Professional 7-band parametric EQ with analog warmth. Surgical precision meets musical character. Built with Rust for low CPU usage.',
    ogImage: '/images/og/eq.png',
  },
  {
    slug: 'compressor',
    title: 'Amp Spot Compressor',
    tagline: 'Tame dynamics, keep your soul.',
    description: 'Control your dynamics without killing your music\'s life. Features authentic VU metering and multiple compression styles. The smart auto-mode makes it dead simple for beginners, while full manual control gives seasoned engineers precision.',
    features: [
      'Authentic VU meter with realistic ballistics',
      'Multiple compression models (VCA, FET, Opto)',
      'Smart auto-mode for one-knob operation',
      'Sidechain input with filtering options',
      'Parallel compression with wet/dry mix',
    ],
    phase: 1,
    status: 'coming-soon',
    metaTitle: 'Amp Spot Compressor - Dynamic Control with VU Metering',
    metaDescription: 'Professional compressor plugin with authentic VU metering. Tame dynamics without killing your music. Built with Rust.',
    ogImage: '/images/og/compressor.png',
  },
  {
    slug: 'analyzer',
    title: 'Amp Spot Analyzer',
    tagline: 'See what your ears are telling you.',
    description: 'Stop guessing and start knowing. Our real-time spectrum analyzer reveals exactly what\'s happening in your frequency spectrum. Learn to trust your ears faster by seeing the correlation between what you hear and what\'s actually there.',
    features: [
      'Real-time FFT spectrum analysis',
      'Peak hold with adjustable decay',
      'Multiple display modes and color schemes',
      'VIZIA glassmorphism UI design',
      'Low latency, high refresh rate',
    ],
    phase: 1,
    status: 'coming-soon',
    metaTitle: 'Amp Spot Analyzer - Real-Time Spectrum Analysis',
    metaDescription: 'Professional spectrum analyzer plugin. See what your ears are telling you. Real-time FFT with peak hold.',
    ogImage: '/images/og/analyzer.png',
  },
  {
    slug: 'ms-processor',
    title: 'Amp Spot M/S',
    tagline: 'Master your stereo field like a pro.',
    description: 'Unlock the power of mid/side processing and transform your mixes. Separate the center information from the stereo width to surgically EQ, compress, and process each independently. Perfect for adding presence to vocals or widening pads.',
    features: [
      'Independent Mid and Side channel processing',
      'Width control for stereo expansion/narrowing',
      'Mono compatibility monitoring',
      'Phase correlation metering',
      'Swap M/S mode for creative effects',
    ],
    phase: 1,
    status: 'coming-soon',
    metaTitle: 'Amp Spot M/S - Mid/Side Stereo Processor',
    metaDescription: 'Professional mid/side processor plugin. Master your stereo field like a pro. Separate and process mid and side independently.',
    ogImage: '/images/og/ms-processor.png',
  },
];

export function getPluginBySlug(slug: string): Plugin | undefined {
  return plugins.find((p) => p.slug === slug);
}

export function getPhase1Plugins(): Plugin[] {
  return plugins.filter((p) => p.phase === 1);
}

export function getPhase2Plugins(): Plugin[] {
  return plugins.filter((p) => p.phase === 2);
}

export function getAllPlugins(): Plugin[] {
  return plugins;
}
