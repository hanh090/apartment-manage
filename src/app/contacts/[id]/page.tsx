
import type { Metadata } from 'next';
import { contacts as allContactsData } from '@/data/contacts';
import { getContactById } from '@/lib/contactUtils';
import ContactDetailClientContent from '@/components/contacts/ContactDetailClientContent';

// generateStaticParams remains a server function
export async function generateStaticParams() {
  return allContactsData.map(contact => ({
    id: contact.id,
  }));
}

// generateMetadata is a server function
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const contact = await getContactById(params.id);
  if (!contact) {
    return {
      title: 'Contact Not Found',
      description: 'The contact you are looking for does not exist.',
    };
  }
  // For simplicity, metadata uses English. For full localization, consider locale in route.
  return {
    title: `${contact.name.en} | ContactVerse`,
    description: contact.shortDescription.en,
  };
}

// This is the Server Component for the page
export default function ContactDetailPage({ params }: { params: { id: string } }) {
  // The Server Component renders the Client Component
  // The Client Component will use useParams() to get the id itself
  return <ContactDetailClientContent />;
}
