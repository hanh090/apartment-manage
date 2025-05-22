'use client';

import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';

interface OmniSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function OmniSearch({ searchTerm, onSearchChange }: OmniSearchProps) {
  return (
    <div className="my-6 md:my-8 max-w-xl mx-auto">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search contacts by name, number, description, category..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 py-3 text-base rounded-lg shadow-sm focus:ring-accent focus:border-accent"
          aria-label="Search contacts"
        />
      </div>
    </div>
  );
}
