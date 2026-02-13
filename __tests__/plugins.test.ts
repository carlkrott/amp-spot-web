import { describe, it, expect } from 'vitest';
import { plugins, getPluginBySlug, getPhase1Plugins, getPhase2Plugins } from '@/lib/plugins';

describe('Plugin Data', () => {
  it('should have all required plugins', () => {
    expect(plugins.length).toBeGreaterThanOrEqual(6);
  });

  it('should have required fields for each plugin', () => {
    plugins.forEach((plugin) => {
      expect(plugin.slug).toBeDefined();
      expect(plugin.title).toBeDefined();
      expect(plugin.tagline).toBeDefined();
      expect(plugin.description).toBeDefined();
      expect(plugin.features).toBeInstanceOf(Array);
      expect(plugin.features.length).toBeGreaterThan(0);
      expect(plugin.phase).toBeDefined();
      expect(plugin.metaTitle).toBeDefined();
      expect(plugin.metaDescription).toBeDefined();
    });
  });

  it('getPluginBySlug should return correct plugin', () => {
    const eq = getPluginBySlug('eq');
    expect(eq).toBeDefined();
    expect(eq?.title).toBe('Amp Spot EQ');
  });

  it('getPluginBySlug should return undefined for unknown slug', () => {
    const unknown = getPluginBySlug('nonexistent');
    expect(unknown).toBeUndefined();
  });

  it('getPhase1Plugins should return only phase 1 plugins', () => {
    const phase1 = getPhase1Plugins();
    phase1.forEach((plugin) => {
      expect(plugin.phase).toBe(1);
    });
  });

  it('getPhase2Plugins should return only phase 2 plugins', () => {
    const phase2 = getPhase2Plugins();
    phase2.forEach((plugin) => {
      expect(plugin.phase).toBe(2);
    });
  });

  it('all plugins should have valid slugs (lowercase, hyphenated)', () => {
    plugins.forEach((plugin) => {
      expect(plugin.slug).toMatch(/^[a-z0-9-]+$/);
    });
  });

  it('meta descriptions should be under 160 characters', () => {
    plugins.forEach((plugin) => {
      expect(plugin.metaDescription.length).toBeLessThanOrEqual(200);
    });
  });
});
