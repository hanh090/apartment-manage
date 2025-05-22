
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Toaster } from '@/components/ui/toaster';
import { LocaleProvider } from '@/context/LocaleContext'; // Import LocaleProvider

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ContactVerse',
  description: 'Your personal contact management app.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> {/* Consider setting lang dynamically based on locale in the future */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <LocaleProvider> {/* Wrap with LocaleProvider */}
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Toaster />
        </LocaleProvider>
      </body>
    </html>
  );
}
