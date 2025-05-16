import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const interSands = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Harry Potter World',
  description: 'All thing Harry Potter',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSands.variable} antialiased`}>{children}</body>
    </html>
  );
}

