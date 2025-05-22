
import type { Contact } from '@/types';
import ContactCard from './ContactCard';
import { Folder } from 'lucide-react';

interface ContactListProps {
  categoryName: string;
  contacts: Contact[];
}

export default function ContactList({ categoryName, contacts }: ContactListProps) {
  if (contacts.length === 0) {
    return null;
  }

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-primary/30 flex items-center text-primary">
        <Folder className="h-6 w-6 mr-3 text-primary" />
        {categoryName}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </section>
  );
}
