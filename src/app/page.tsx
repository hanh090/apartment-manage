'use client';

import { useState, useMemo, useEffect } from 'react';
import type { Contact } from '@/types';
import { contacts as allContactsData } from '@/data/contacts';
import OmniSearch from '@/components/contacts/OmniSearch';
import ContactList from '@/components/contacts/ContactList';
import { Skeleton } from '@/components/ui/skeleton';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allContacts, setAllContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      contact.name.toLowerCase().includes(lowerSearchTerm) ||
      contact.phoneNumber.includes(searchTerm) || // Phone numbers might not need lowercasing if format is consistent
      contact.shortDescription.toLowerCase().includes(lowerSearchTerm) ||
      (contact.email && contact.email.toLowerCase().includes(lowerSearchTerm)) ||
      contact.category.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm, allContacts, isLoading]);

  const contactsByCategory = useMemo(() => {
    if (isLoading) return {};
    return filteredContacts.reduce((acc, contact) => {
      const category = contact.category || 'Uncategorized';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(contact);
      return acc;
    }, {} as Record<string, Contact[]>);
  }, [filteredContacts, isLoading]);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 md:p-6">
        <div className="my-6 md:my-8 max-w-xl mx-auto">
          <Skeleton className="h-12 w-full rounded-lg" />
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
      <OmniSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      {Object.keys(contactsByCategory).length === 0 && !isLoading ? (
         <div className="text-center py-10">
           <p className="text-xl text-muted-foreground">
             {searchTerm ? "No contacts found matching your search." : "No contacts available."}
           </p>
           {searchTerm && (
            <p className="text-sm text-muted-foreground mt-2">Try a different search term or clear the search.</p>
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
