import { Plugin } from '@/types/plugin';

// Plugin data from COPY_SEO_SPECS.md
export const plugins: Plugin[] = [
  {
    slug: 'eq',
    title: 'Amp Spot EQ',
    tagline: 'Surgical precision meets musical character.',
    description: 'Our EQ plugin combines the best of digital precision with analog warmth. Shape your sounds with transparent surgical cuts or add character with our tube and transformer emulations. Whether you\'re carving space in a dense mix or adding final polish, Amp Spot EQ handles it all without breaking a sweat.',
    features: [
      '8-band parametric EQ with 6 filter types per band',
      'Analog mode with tube, transformer, and tape saturation options',
      'Real-time spectrum analyzer with frequency overlay',
      'Mid/side processing for precise stereo imaging',
      'Built-in matching for instant reference tones',
    ],
    phase: 1,
    metaTitle: 'Amp Spot EQ - Surgical precision meets musical character.',
    metaDescription: 'Our EQ plugin combines the best of digital precision with analog warmth. Shape your sounds with transparent surgical cuts or add character. Free trial available.',
    ogImage: '/images/og/eq.png',
  },
  {
    slug: 'compressor',
    title: 'Amp Spot Compressor',
    tagline: 'Tame dynamics, keep your soul.',
    description: 'Control your dynamics without killing your music\'s life. From gentle leveling to aggressive pumping, this compressor delivers the glue your tracks need. The smart auto-mode makes it dead simple for beginners, while full manual control gives seasoned engineers the surgical precision they demand.',
    features: [
      'Four distinct compressor models (VCA, FET, Opto, Vari-Mu)',
      'Smart auto-mode for one-knob magic',
      'Sidechain input with comprehensive filtering options',
      'Parallel compression built right in',
      'Wet/dry mix for easy NY compression setups',
    ],
    phase: 1,
    metaTitle: 'Amp Spot Compressor - Tame dynamics, keep your soul.',
    metaDescription: 'Control your dynamics without killing your music\'s life. From gentle leveling to aggressive pumping, this compressor delivers the glue your tracks need. Free trial available.',
    ogImage: '/images/og/compressor.png',
  },
  {
    slug: 'analyzer',
    title: 'Amp Spot Analyzer',
    tagline: 'See what your ears are telling you.',
    description: 'Stop guessing and start knowing. Our multi-dimensional analyzer reveals exactly what\'s happening in your frequency spectrum, stereo field, and dynamic range. Learn to trust your ears faster by seeing the correlation between what you hear and what\'s actually there.',
    features: [
      'Real-time frequency spectrum with multiple windowing options',
      'Stereo field analyzer with correlation metering',
      'LUFS and true peak loudness metering (EBU R128)',
      'Dynamic range histogram for visual compression feedback',
      'Reference comparison mode for A/B matching',
    ],
    phase: 1,
    metaTitle: 'Amp Spot Analyzer - See what your ears are telling you.',
    metaDescription: 'Stop guessing and start knowing. Our multi-dimensional analyzer reveals exactly what\'s happening in your frequency spectrum, stereo field, and dynamic range. Free trial available.',
    ogImage: '/images/og/analyzer.png',
  },
  {
    slug: 'saturation',
    title: 'Amp Spot Saturation',
    tagline: 'Add warmth without the heat damage.',
    description: 'Give your digital tracks the analog love they\'ve been missing. From subtle tape warmth to aggressive tube grit, our saturation plugin adds harmonic richness that brings sterile sounds to life. Perfect for adding presence to drums, beef to bass, or gluing an entire mix together.',
    features: [
      'Four saturation engines: Tape, Tube, Transformer, Circuit',
      'Mix knob for parallel saturation workflows',
      'Variable low/high-pass filtering for targeted warmth',
      'Auto-gain to prevent level jumping when adjusting drive',
      'Oversampling up to 16x for artifact-free saturation',
    ],
    phase: 1,
    metaTitle: 'Amp Spot Saturation - Add warmth without the heat damage.',
    metaDescription: 'Give your digital tracks the analog love they\'ve been missing. From subtle tape warmth to aggressive tube grit, our saturation plugin adds harmonic richness. Free trial available.',
    ogImage: '/images/og/saturation.png',
  },
  {
    slug: 'gate-expander',
    title: 'Amp Spot Gate/Expander',
    tagline: 'Silence the noise, keep the good stuff.',
    description: 'Clean up your tracks without killing their natural decay. Our gate/expander plugin offers precise noise reduction with musical transparency. From tight kick drums to subtle ambience control, you\'ll wonder how you ever lived without it.',
    features: [
      'Dual mode: Gate and Expander with seamless transitions',
      'Look-ahead capability for glitch-free operation',
      'Key listen function for easy threshold setting',
      'Hysteresis control to prevent chatter on dynamic material',
      'Multiple filter types for frequency-dependent gating',
    ],
    phase: 1,
    metaTitle: 'Amp Spot Gate/Expander - Silence the noise, keep the good stuff.',
    metaDescription: 'Clean up your tracks without killing their natural decay. Our gate/expander plugin offers precise noise reduction with musical transparency. Free trial available.',
    ogImage: '/images/og/gate-expander.png',
  },
  {
    slug: 'ms-processor',
    title: 'Amp Spot M/S Processor',
    tagline: 'Master your stereo field like a pro.',
    description: 'Unlock the power of mid/side processing and transform your mixes. Separate the center information from the stereo width to surgically EQ, compress, and saturate each independently. Perfect for adding presence to vocals without affecting the stereo spread, or widening pads without muddying your mix core.',
    features: [
      'Independent processing for Mid and Side channels',
      'Width control for instant stereo expansion or narrowing',
      'Swap M/S mode for creative stereo effects',
      'Mono compatibility meter with warning indicators',
      'Built-in EQ and compression for each channel',
    ],
    phase: 1,
    metaTitle: 'Amp Spot M/S Processor - Master your stereo field like a pro.',
    metaDescription: 'Unlock the power of mid/side processing and transform your mixes. Separate the center information from the stereo width to surgically process each. Free trial available.',
    ogImage: '/images/og/ms-processor.png',
  },
  {
    slug: 'de-esser',
    title: 'Amp Spot De-Esser',
    tagline: 'Tame sibilance, keep the presence.',
    description: 'Say goodbye to harsh sibilance without making your vocals sound dull. Our intelligent de-esser targets only the problem frequencies while preserving natural brightness and clarity. With split-band operation and dynamic EQ-style precision, you\'ll get transparent results that sound like magic, not processing.',
    features: [
      'Two detection modes: Split-band and Dynamic EQ',
      'Smart detection that learns your source material',
      'Sidechain listen for accurate targeting',
      'Wide/narrow Q control for surgical vs gentle treatment',
      'Auto-attack/release for set-and-forget simplicity',
    ],
    phase: 2,
    metaTitle: 'Amp Spot De-Esser - Tame sibilance, keep the presence.',
    metaDescription: 'Say goodbye to harsh sibilance without making your vocals sound dull. Our intelligent de-esser targets only the problem frequencies. Free trial available.',
    ogImage: '/images/og/de-esser.png',
  },
  {
    slug: 'limiter',
    title: 'Amp Spot Limiter',
    tagline: 'Push loud without the distortion.',
    description: 'Make your tracks and masters competitively loud without sacrificing dynamics or introducing nasty artifacts. Our brickwall limiter uses advanced lookahead and transparent gain reduction to maximize loudness while keeping your music intact. True peak metering ensures your output stays safe for streaming platforms.',
    features: [
      'True peak limiting for streaming-safe masters',
      'Adjustable lookahead up to 20ms for transparent limiting',
      'Release envelope shaping for musical transients',
      'Ceiling control with auto-gain matching',
      'Oversampling up to 8x for artifact-free operation',
    ],
    phase: 2,
    metaTitle: 'Amp Spot Limiter - Push loud without the distortion.',
    metaDescription: 'Make your tracks and masters competitively loud without sacrificing dynamics. Our brickwall limiter uses advanced lookahead for transparent results. Free trial available.',
    ogImage: '/images/og/limiter.png',
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
