import Link from 'next/link';

export const metadata = {
  title: 'Blog | Amp Spot',
  description: 'Tips, tutorials, and insights for music producers and audio engineers.',
};

const blogPosts = [
  {
    id: 1,
    title: '10 EQ Mistakes You\'re Probably Making',
    excerpt: 'Common EQ pitfalls and how to avoid them for cleaner, more professional mixes.',
    date: 'Coming Soon',
    category: 'Mixing Tips',
  },
  {
    id: 2,
    title: 'The Psychology of Compression',
    excerpt: 'Understanding how compression affects the listener\'s perception of your music.',
    date: 'Coming Soon',
    category: 'Technique',
  },
  {
    id: 3,
    title: 'Home Studio Setup on a Budget',
    excerpt: 'Get great sounding recordings without breaking the bank.',
    date: 'Coming Soon',
    category: 'Production',
  },
];

export default function BlogPage() {
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
              Amp Spot Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-orange-100 sm:text-xl">
              Tips, tutorials, and insights for better music production
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm"
              >
                <span className="inline-block mb-3 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-400">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm font-medium text-gray-400">Coming Soon</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-red-800 py-16">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            More Content Coming Soon
          </h2>
          <p className="mt-4 text-lg text-orange-100">
            We\'re working on bringing you the best production tips and tutorials. Stay tuned!
          </p>
        </div>
      </section>
    </div>
  );
}
