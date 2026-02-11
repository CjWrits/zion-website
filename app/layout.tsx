// Root layout component for the Next.js application
import DiscordBubble from '@/components/DiscordBubble';
import './globals.css';
import { Inter } from 'next/font/google';

// Configure Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] });

// Root layout wrapper that applies to all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body className={inter.className}>
        {children}
        {/* Discord community link bubble */}
        <DiscordBubble/>
      </body>
    </html>
  );
}
