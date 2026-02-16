import { describe, it, expect } from 'vitest';
import { plugins, getPluginBySlug, getPhase1Plugins, getAllPlugins } from '@/lib/plugins';

describe('plugins', () => {
  it('should return all plugins', () => {
    const allPlugins = getAllPlugins();
    expect(allPlugins).toHaveLength(4);
  });

  it('should have all required properties on each plugin', () => {
    plugins.forEach((plugin) => {
      expect(plugin).toHaveProperty('slug');
      expect(plugin).toHaveProperty('title');
      expect(plugin).toHaveProperty('tagline');
      expect(plugin).toHaveProperty('description');
      expect(plugin).toHaveProperty('features');
      expect(plugin).toHaveProperty('phase');
      expect(plugin).toHaveProperty('status');
      expect(plugin).toHaveProperty('metaTitle');
      expect(plugin).toHaveProperty('metaDescription');
      expect(plugin).toHaveProperty('ogImage');
    });
  });

  it('should have valid slugs', () => {
    const validSlugs = ['eq', 'compressor', 'analyzer', 'ms-processor'];
    const pluginSlugs = plugins.map((p) => p.slug);
    expect(pluginSlugs).toEqual(expect.arrayContaining(validSlugs));
  });

  it('should have at least 3 features per plugin', () => {
    plugins.forEach((plugin) => {
      expect(plugin.features.length).toBeGreaterThanOrEqual(3);
    });
  });
});

describe('getPluginBySlug', () => {
  it('should return the correct plugin for valid slug', () => {
    const eqPlugin = getPluginBySlug('eq');
    expect(eqPlugin).toBeDefined();
    expect(eqPlugin?.slug).toBe('eq');
    expect(eqPlugin?.title).toBe('Amp Spot EQ');
  });

  it('should return undefined for invalid slug', () => {
    const result = getPluginBySlug('non-existent');
    expect(result).toBeUndefined();
  });

  it('should return correct plugins for all valid slugs', () => {
    const validSlugs = ['eq', 'compressor', 'analyzer', 'ms-processor'];
    validSlugs.forEach((slug) => {
      const plugin = getPluginBySlug(slug);
      expect(plugin).toBeDefined();
      expect(plugin?.slug).toBe(slug);
    });
  });
});

describe('getPhase1Plugins', () => {
  it('should return all phase 1 plugins', () => {
    const phase1Plugins = getPhase1Plugins();
    expect(phase1Plugins).toHaveLength(4);
  });

  it('should only return plugins with phase 1', () => {
    const phase1Plugins = getPhase1Plugins();
    phase1Plugins.forEach((plugin) => {
      expect(plugin.phase).toBe(1);
    });
  });
});
