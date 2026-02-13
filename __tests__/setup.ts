import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
  notFound: vi.fn(),
}));

// Mock next/link
vi.mock('next/link', async () => {
  const React = await import('react');
  return {
    default: function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
      return React.createElement('a', { href }, children);
    },
  };
});
