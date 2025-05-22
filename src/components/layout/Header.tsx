
'use client';

import Link from 'next/link';
import { Contact } from 'lucide-react';
import OmniSearch from '@/components/contacts/OmniSearch';
import { useSearch } from '@/context/SearchContext';

export function Header() {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary hover:text-primary/90 transition-colors flex-shrink-0">
          <Contact className="h-7 w-7" />
          <span>ContactVerse</span>
        </Link>
        <div className="flex-grow max-w-xl">
          <OmniSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
      </div>
    </header>
  );
}
