
'use client';

import { useMemo, useEffect, useState } from 'react';
import type { Contact } from '@/types';
import { contacts as allContactsData } from '@/data/contacts';
import ContactList from '@/components/contacts/ContactList';
import { Skeleton } from '@/components/ui/skeleton';
import OmniSearch from '@/components/contacts/OmniSearch';
import { useLocale } from '@/context/LocaleContext'; // Import useLocale

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allContacts, setAllContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { locale } = useLocale(); // Get current locale

  useEffect(() => {
    // Simulate data fetching
    setAllContacts(allContactsData);
    setIsLoading(false);
  }, []);

  const filteredContacts = useMemo(() => {
    if (isLoading) return [];
    if (!searchTerm.trim()) return allContacts;
    const lowerSearchTerm = searchTerm.toLowerCase();
    return allContacts.filter(contact =>
      contact.name[locale].toLowerCase().includes(lowerSearchTerm) ||
      contact.phoneNumber.includes(searchTerm) || 
      contact.shortDescription[locale].toLowerCase().includes(lowerSearchTerm) ||
      (contact.email && contact.email.toLowerCase().includes(lowerSearchTerm)) ||
      contact.category[locale].toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm, allContacts, isLoading, locale]);

  const contactsByCategory = useMemo(() => {
    if (isLoading) return {};
    return filteredContacts.reduce((acc, contact) => {
      const category = contact.category[locale] || 'Uncategorized';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(contact);
      return acc;
    }, {} as Record<string, Contact[]>);
  }, [filteredContacts, isLoading, locale]);

  const noContactsMessage = useMemo(() => {
    const messages = {
      en: {
        noMatch: "No contacts found matching your search.",
        noContacts: "No contacts available.",
        tryDifferentSearch: "Try a different search term or clear the search."
      },
      vi: {
        noMatch: "Không tìm thấy liên hệ nào phù hợp với tìm kiếm của bạn.",
        noContacts: "Không có liên hệ nào.",
        tryDifferentSearch: "Hãy thử một cụm từ tìm kiếm khác hoặc xóa tìm kiếm."
      }
    };
    return messages[locale];
  }, [locale]);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 md:p-6">
        <div className="my-6 md:my-8 w-4/5 mx-auto">
          {/* Skeleton for search bar can be re-added if needed */}
        </div>
        {[1, 2].map(i => (
          <div key={i} className="mb-10">
            <Skeleton className="h-8 w-1/3 mb-6 rounded" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(j => (
                <Skeleton key={j} className="h-64 rounded-lg" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="my-6 md:my-8 w-4/5 mx-auto">
        <OmniSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      
      {Object.keys(contactsByCategory).length === 0 && !isLoading ? (
         <div className="text-center py-10">
           <p className="text-xl text-muted-foreground">
             {searchTerm ? noContactsMessage.noMatch : noContactsMessage.noContacts}
           </p>
           {searchTerm && (
            <p className="text-sm text-muted-foreground mt-2">{noContactsMessage.tryDifferentSearch}</p>
           )}
         </div>
      ) : (
        Object.entries(contactsByCategory).map(([category, contacts]) => (
          <ContactList key={category} categoryName={category} contacts={contacts} />
        ))
      )}
    </div>
  );
}
