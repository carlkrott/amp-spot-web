import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Hero';

describe('Hero Component', () => {
  it('renders default variant A headline', () => {
    render(<Hero />);
    expect(screen.getByText('Plugins That Punch Above Their Weight')).toBeInTheDocument();
  });

  it('renders variant B headline', () => {
    render(<Hero variant="B" />);
    expect(screen.getByText('Your Mix Deserves Better Than Stock Plugins')).toBeInTheDocument();
  });

  it('renders variant C headline', () => {
    render(<Hero variant="C" />);
    expect(screen.getByText('Great Sound, Great Price. No BS.')).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /Try for Free/i })).toBeInTheDocument();
  });

  it('renders explore plugins link', () => {
    render(<Hero />);
    expect(screen.getByText(/Explore plugins/i)).toBeInTheDocument();
  });
});
