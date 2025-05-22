
'use client';

import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';

interface OmniSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function OmniSearch({ searchTerm, onSearchChange }: OmniSearchProps) {
  return (
    <div className="my-8 md:my-10 max-w-3xl mx-auto"> {/* Increased max-width slightly */}
      <div className="relative">
        <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 h-8 w-8 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search contacts by name, number, description, category..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-16 pr-6 py-5 text-xl rounded-2xl shadow-xl border-2 border-input focus:border-accent focus:ring-2 focus:ring-accent placeholder:text-foreground/70"
          aria-label="Search contacts"
        />
      </div>
    </div>
  );
}

