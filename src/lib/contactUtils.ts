
import { contacts as allContactsData } from '@/data/contacts';
import type { Contact } from '@/types';

export async function getContactById(id: string): Promise<Contact | undefined> {
  // Simulate async fetching if needed in the future, for now, it's synchronous
  return allContactsData.find(contact => contact.id === id);
}
