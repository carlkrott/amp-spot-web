import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Amp Spot',
    };
  }

  return {
    title: `${post.title} | Amp Spot Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-400 hover:text-orange-400 transition-colors mb-8"
        >
          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="text-orange-400 font-medium">{post.author}</span>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map(tag => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase()}`}
                className="inline-flex items-center rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-400 hover:bg-orange-500/20 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-invert prose-orange max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-800">
          <p className="text-gray-400 text-sm">
            Written by <span className="text-orange-400 font-medium">{post.author}</span>
            {post.updatedAt && ` • Updated ${formatDate(post.updatedAt)}`}
          </p>
        </footer>
      </div>
    </article>
  );
}

function renderContent(content: string) {
  // Simple markdown parser for the blog content
  // Convert markdown to HTML
  const html = content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-semibold text-white mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-white mt-10 mb-5">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-white mt-6 mb-4">$1</h1>')
    // Bold
    .replace(/\*\*(.*)\*\*/gim, '<strong class="text-orange-400">$1</strong>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-orange-400 hover:text-orange-300 underline transition-colors">$1</a>')
    // Lists
    .replace(/^\- (.*$)/gim, '<li class="text-gray-300 ml-4">$1</li>')
    .replace(/(<li[\s\S]*<\/li>)/g, '<ul class="list-disc space-y-2 my-4">$1</ul>')
    // Numbered lists
    .replace(/^\d+\. (.*$)/gim, '<li class="text-gray-300 ml-4">$1</li>')
    // Code blocks
    .replace(/`([^`]+)`/gim, '<code class="bg-slate-800 text-orange-400 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    // Line breaks to paragraphs (simple version)
    .replace(/\n\n/g, '</p><p class="text-gray-300 leading-relaxed my-4">')
    // Cleanup any remaining line breaks
    .replace(/\n/g, '<br />');

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
