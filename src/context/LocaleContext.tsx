
'use client';

import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState, useMemo } from 'react';

type Locale = 'vi' | 'en';

interface LocaleContextType {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('vi'); // Default to Vietnamese
  const contextValue = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
