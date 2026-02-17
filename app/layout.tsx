// Root layout component for the Next.js application
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import DiscordBubble from '@/components/DiscordBubble';

// Configure Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] });

// Metadata for the application
export const metadata: Metadata = {
  title: 'Zion Community',
  description: 'The cosmic visionaries behind Zion community',
  icons: {
    icon: '/logo.ico',
  },
};

// Root layout wrapper that applies to all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
    <DiscordBubble/>
      </body>
    </html>
  );
}
