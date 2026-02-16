import { describe, it, expect } from 'vitest';
import { getAllPosts, getPostBySlug, getLatestPosts, getPostsByTag, getAllTags } from '@/lib/blog';

describe('blog', () => {
  it('should return all blog posts', () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThan(0);
  });

  it('should sort posts by publication date (newest first)', () => {
    const posts = getAllPosts();
    const dates = posts.map(p => new Date(p.publishedAt).getTime());
    
    for (let i = 0; i < dates.length - 1; i++) {
      expect(dates[i]).toBeGreaterThanOrEqual(dates[i + 1]);
    }
  });
});

describe('getPostBySlug', () => {
  it('should return the correct post for valid slug', () => {
    const post = getPostBySlug('how-to-fix-muddy-mixes-eq-tutorial');
    expect(post).toBeDefined();
    expect(post?.slug).toBe('how-to-fix-muddy-mixes-eq-tutorial');
  });

  it('should return undefined for invalid slug', () => {
    const post = getPostBySlug('non-existent-post');
    expect(post).toBeUndefined();
  });
});

describe('getLatestPosts', () => {
  it('should return the requested number of posts', () => {
    const posts = getLatestPosts(3);
    expect(posts).toHaveLength(3);
  });

  it('should return empty array when requesting 0 posts', () => {
    const posts = getLatestPosts(0);
    expect(posts).toHaveLength(0);
  });

  it('should not exceed available posts', () => {
    const allPosts = getAllPosts();
    const latest = getLatestPosts(100);
    expect(latest.length).toBe(allPosts.length);
  });
});

describe('getPostsByTag', () => {
  it('should return posts with the specified tag', () => {
    const tutorialPosts = getPostsByTag('Tutorial');
    expect(tutorialPosts.length).toBeGreaterThan(0);
    tutorialPosts.forEach(post => {
      expect(post.tags).toContain('Tutorial');
    });
  });

  it('should return empty array for non-existent tag', () => {
    const posts = getPostsByTag('NonExistentTag');
    expect(posts).toHaveLength(0);
  });

  it('should handle case-sensitive tags', () => {
    const lowercase = getPostsByTag('tutorial');
    const uppercase = getPostsByTag('Tutorial');
    expect(lowercase.length).not.toBe(uppercase.length);
  });
});

describe('getAllTags', () => {
  it('should return all unique tags', () => {
    const tags = getAllTags();
    const uniqueTags = new Set(tags);
    expect(tags.length).toBe(uniqueTags.size);
  });

  it('should return tags in alphabetical order', () => {
    const tags = getAllTags();
    const sortedTags = [...tags].sort();
    expect(tags).toEqual(sortedTags);
  });

  it('should include known tags', () => {
    const tags = getAllTags();
    expect(tags).toContain('Tutorial');
    expect(tags).toContain('Video');
    expect(tags).toContain('Product');
  });
});
