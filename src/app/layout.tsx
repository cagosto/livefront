import type { Metadata } from 'next';
import { Inter, MedievalSharp } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const interSands = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const medievalSharp = MedievalSharp({
  weight: '400',
  variable: '--font-medieval',
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
      <body
        className={`${interSands.variable} ${medievalSharp.variable} antialiased`}
      >
        <header className="bg-secondary mb-6">
          <div className="2xl:max-w-screen-2xl mx-auto p-9">
            <h1 className="font-logo text-center text-5xl text-transparent bg-gradient-to-r from-amber-200 to-rose-950 bg-clip-text  bg-size-200 animate-gradient">
              <Link href="/">Harry Potter World</Link>
            </h1>
          </div>
        </header>
        <div className="2xl:max-w-screen-2xl mx-auto">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

