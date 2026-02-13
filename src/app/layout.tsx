import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ampspot.audio'),
  title: {
    default: 'Amp Spot - Audio Plugins That Punch Above Their Weight',
    template: '%s | Amp Spot',
  },
  description: 'Amp Spot delivers professional audio plugins that punch above their weight. From EQ and compression to saturation and analysis, get studio-quality tools without the studio price tag. Try for free today.',
  keywords: ['audio plugins', 'VST plugins', 'AU plugins', 'mixing plugins', 'mastering plugins', 'EQ plugin', 'compressor plugin', 'saturation plugin', 'audio analyzer', 'music production', 'DAW plugins', 'home recording', 'mixing tools', 'audio engineering'],
  authors: [{ name: 'Amp Spot' }],
  creator: 'Amp Spot',
  publisher: 'Amp Spot',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Amp Spot',
    title: 'Amp Spot - Audio Plugins That Punch Above Their Weight',
    description: 'Professional-grade audio plugins for everyone. Download free trials of our EQ, compressor, analyzer, saturation, and more. Your mix deserves better than stock plugins.',
    images: [
      {
        url: '/images/og/home.png',
        width: 1200,
        height: 630,
        alt: 'Amp Spot - Professional Audio Plugins',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amp Spot - Audio Plugins That Punch Above Their Weight',
    description: 'Professional-grade audio plugins for everyone. Try for free today.',
    images: ['/images/og/home.png'],
    creator: '@ampspot',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-slate-900 text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
