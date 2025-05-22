
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
    <div className="my-8 md:my-10 max-w-3xl mx-auto px-4 sm:px-0">
      <div className="flex items-stretch shadow-xl rounded-xl overflow-hidden border border-border focus-within:ring-2 focus-within:ring-ring focus-within:border-primary">
        <div className="relative flex-grow">
          <SearchIcon
            className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground pointer-events-none"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search contacts by name, number, etc."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-16 pl-14 pr-4 py-4 text-lg 
                       border-0 rounded-l-xl rounded-r-none 
                       bg-background
                       focus:ring-0 focus-visible:ring-0 focus:outline-none shadow-none
                       placeholder:text-muted-foreground"
            aria-label="Search contacts"
          />
        </div>
        <Button
          type="button"
          className="h-16 px-6 sm:px-8 text-lg font-semibold rounded-l-none rounded-r-xl 
                     bg-primary text-primary-foreground hover:bg-primary/90 
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0"
          // If this button should submit a form or trigger a specific search action:
          // onClick={() => { /* Perform search action */ }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
