
'use client';

import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';

interface OmniSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function OmniSearch({ searchTerm, onSearchChange }: OmniSearchProps) {
  return (
    <div className="my-8 md:my-10 max-w-2xl mx-auto">
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search contacts by name, number, description, category..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-4 py-4 text-lg rounded-xl shadow-md focus:ring-accent focus:border-accent"
          aria-label="Search contacts"
        />
      </div>
    </div>
  );
}
