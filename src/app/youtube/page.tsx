import Link from 'next/link';

export const metadata = {
  title: 'YouTube Channel | Amp Spot',
  description: 'Watch tutorials, mixing tips, and plugin demos on the Amp Spot YouTube channel. Learn how to get the best sound from your mixes.',
};

const latestVideos = [
  {
    id: 1,
    title: 'How to Use EQ to Fix Muddy Mixes',
    description: 'Learn the secrets of carving space in your mix with EQ.',
    thumbnail: '/images/youtube/thumbnail-1.jpg',
  },
  {
    id: 2,
    title: 'Compression Masterclass for Beginners',
    description: 'Everything you need to know to start using compression effectively.',
    thumbnail: '/images/youtube/thumbnail-2.jpg',
  },
  {
    id: 3,
    title: 'Amp Spot EQ Plugin - Full Walkthrough',
    description: 'Discover all the features of our flagship EQ plugin.',
    thumbnail: '/images/youtube/thumbnail-3.jpg',
  },
  {
    id: 4,
    title: 'Mixing Drums: From Demo to Pro',
    description: 'Transform your drum sounds with these professional techniques.',
    thumbnail: '/images/youtube/thumbnail-4.jpg',
  },
];

export default function YouTubePage() {
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
              Amp Spot on YouTube
            </h1>
            <p className="mt-6 text-lg leading-8 text-orange-100 sm:text-xl">
              Free tutorials, mixing tips, and plugin demos to help you make better music
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
              <a
                href="https://youtube.com/@ampspot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg transition-all hover:bg-orange-50 hover:shadow-xl"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
                Subscribe to the Channel
              </a>
              <a
                href="https://youtube.com/@ampspot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold leading-6 text-white transition-colors hover:text-orange-200"
              >
                Watch Latest Video <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel Embed Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Live From the Channel
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Check out our latest content directly from YouTube
            </p>
          </div>

          {/* Channel embed placeholder */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="rounded-full bg-red-600 p-4 mb-4">
                <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-white font-semibold">Amp Spot YouTube Channel</p>
              <p className="text-gray-400 mt-2">Channel embed coming soon</p>
              <a
                href="https://youtube.com/@ampspot"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-red-500 transition-colors"
              >
                Visit Channel on YouTube
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section className="py-16 sm:py-24 bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Latest Videos
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Fresh content to help you improve your productions
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {latestVideos.map((video) => (
              <a
                key={video.id}
                href="https://youtube.com/@ampspot"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-800">
                  {/* Placeholder thumbnail */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-orange-600/80 p-3 group-hover:bg-orange-500 transition-colors">
                      <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://youtube.com/@ampspot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-400 transition-all hover:bg-orange-500 hover:text-white"
            >
              View All Videos
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Content Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Coming Soon
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Here's what we're working on for the channel
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Mastering Your First Track',
                description: 'A complete guide to taking your mix to the final stage.',
                status: 'In Production',
              },
              {
                title: 'Saturation Plugin Deep Dive',
                description: 'Creative ways to add warmth and character to your productions.',
                status: 'Planning',
              },
              {
                title: 'Mixing Vocals Series',
                description: 'Everything you need to know about getting pro vocal sounds.',
                status: 'Coming Soon',
              },
            ].map((content, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-slate-800/30 border border-slate-700/50 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                    content.status === 'In Production'
                      ? 'bg-blue-500/20 text-blue-400'
                      : content.status === 'Planning'
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {content.status}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold text-white">{content.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{content.description}</p>
              </div>
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
            Never Miss a Video
          </h2>
          <p className="mt-4 text-lg text-orange-100">
            Subscribe to the Amp Spot YouTube channel and hit the bell icon to get notified when we post new content.
          </p>
          <div className="mt-8">
            <a
              href="https://youtube.com/@ampspot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg hover:bg-orange-50 transition-all"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
              Subscribe Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
