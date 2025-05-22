
'use client'; // Make it a client component to use context and switcher

import Link from 'next/link';
import { Contact } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher'; // Import the new component

export function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary hover:text-primary/90 transition-colors flex-shrink-0">
          <Contact className="h-7 w-7" />
          <span>ContactVerse</span>
        </Link>
        <LanguageSwitcher /> {/* Add the switcher here */}
      </div>
    </header>
  );
}
