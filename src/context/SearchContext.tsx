
'use client';

import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState, useMemo } from 'react';

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const contextValue = useMemo(() => ({ searchTerm, setSearchTerm }), [searchTerm, setSearchTerm]);

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
