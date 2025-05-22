
'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon } from 'lucide-react';

interface OmniSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function OmniSearch({ searchTerm, onSearchChange }: OmniSearchProps) {
  return (
    <div className="w-full">
      <div className="flex items-stretch shadow-xl rounded-xl overflow-hidden border-2 border-input focus-within:ring-2 focus-within:ring-accent focus-within:border-accent">
        <div className="relative flex-grow">
          <SearchIcon
            className="absolute left-5 top-1/2 transform -translate-y-1/2 h-8 w-8 text-muted-foreground pointer-events-none"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-16 pl-16 pr-4 py-5 text-xl 
                       border-0 rounded-l-xl rounded-r-none 
                       bg-background
                       focus:ring-0 focus-visible:ring-0 focus:outline-none shadow-none
                       placeholder:text-muted-foreground/70"
            aria-label="Search contacts"
          />
        </div>
        <Button
          type="button"
          className="h-16 px-6 sm:px-8 text-lg font-semibold rounded-l-none rounded-r-xl 
                     bg-primary text-primary-foreground hover:bg-primary/90 
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
